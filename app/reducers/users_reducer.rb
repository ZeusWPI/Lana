class UsersReducer < Reducer
  def send_snapshot
    transmit(User.action(:receive, User.all))
    send_login
  end

  def register params
    current_user = User.create name: params['name']
    send_login
  end

  def login params
    current_user = User.find_by! token: params['token']
    send_login
  end

  private
  def send_login
    current_user.try do |u|
      transmit( User.action(:login, u.attributes.slice('id', 'token')))
    end
  end

end
