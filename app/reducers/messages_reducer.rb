class MessagesReducer < Reducer
  def create message
    Message.create! message.merge(
      timestamp: DateTime.current,
      user: current_user
    )
  end
end
