WebsocketRails::EventMap.describe do
  # You can use this file to map incoming events to controller actions.
  # One event can be mapped to any number of controller actions. The
  # actions will be executed in the order they were subscribed.
  #
  # Uncomment and edit the next line to handle the client connected event:
  subscribe :message, to: NotificationController, with_method: :message
  #
  # Here is an example of mapping namespaced events:
  namespace :chat do
    subscribe :connect, to: ChatEventController, with_method: :on_connect
    subscribe :new_message, to: ChatEventController, with_method: :new_message
  end
  # The above will handle an event triggered on the client like `product.new`.
end
