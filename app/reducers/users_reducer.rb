class UsersReducer < Reducer
  def send_snapshot
    # should private user data be sent here?
    transmit(User.action(:receive, User.all))
    send_private_data if current_user
  end

  def register(params)
    self.current_user = User.create name: params['name']
    send_private_data if current_user
  end

  def login(params)
    self.current_user = User.find_by! token: params['token']
    send_private_data if current_user
  end

  private

  def send_private_data
    send_login
    send_messages
  end

  def send_messages
    # TODO: find a better method?
    current_user.groups.each do |group|
      transmit(Message.action(:receive, group: group.id,
                                        messages: Message.where(group: group)))
      stream_from "group_#{group.id}"
    end
  end

  def send_login
    transmit(User.action(:login, current_user.attributes.slice('id', 'token', 'admin')))
  end
end
