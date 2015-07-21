class NotificationController < WebsocketRails::BaseController
  filter_for_channels :all

  def message
    stop_event_propagation!
  end

end
