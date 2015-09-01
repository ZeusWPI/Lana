class ChatEventController < WebsocketRails::BaseController
  def on_connect
  end

  def new_message
    if message[:username].present? and message[:text].present?
      broadcast_message :incoming_message, message, namespace: :chat
    end
  end
end
