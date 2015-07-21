class ChatEventController < WebsocketRails::BaseController
  def on_connect
    send_message :new_connection, "woop!", :namespace => :chat
  end
end
