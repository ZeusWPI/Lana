class ChatEventController < WebsocketRails::BaseController
  def on_connect
  end

  def new_message
    unless message[:text].blank?
      broadcast_message :incoming_message, message, namespace: :chat
    end
  end
end
