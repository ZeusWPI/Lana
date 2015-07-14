class TaskController < WebsocketRails::BaseController
  def notify
    broadcast_message :temp, {}
  end
end
