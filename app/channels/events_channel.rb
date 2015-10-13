class EventsChannel < ActionChannel
  channel :events

  def snapshot
    action(:receive_events, Event.all)
  end
end
