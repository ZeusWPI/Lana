class EventsChannel < ActionChannel
  channel :events
  reducer EventsReducer

  def snapshot
    create_action(:receive_events, Event.all)
  end
end
