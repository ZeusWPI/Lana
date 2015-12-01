class MessagesReducer < Reducer
  def snapshot
    Message.action(:receive, {
      group: nil,
      messages: Message.where(group: nil)
    })
  end

  def create message
    Message.create! message.merge(
      timestamp: DateTime.current,
      user: current_user
    )
  end
end
