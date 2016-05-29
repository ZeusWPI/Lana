class MessagesReducer < Reducer
  def snapshot
    Message.action(:receive, group: nil,
                             messages: Message.where(group: nil))
  end

  def create(message)
    Message.create! contents: message['contents'],
                    group: Group.find_by(name: message['group']),
                    timestamp: DateTime.current,
                    user: current_user
  end
end
