class ChatEventController < WebsocketRails::BaseController
  def on_connect
  end

  def new_message
    chat_message = ChatMessage.new(message)
    if chat_message.save
      broadcast_message :incoming_message, {username:chat_message.user.name, text:chat_message.content}, namespace: :chat
    end
  end
end
