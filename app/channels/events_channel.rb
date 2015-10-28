class EventsChannel < ActionChannel::Channel
  channel :events

  def snapshot
    Action.new(:receive_events, Event.all)
  end

  reducer do
    def add_event event
      e = Event.new event
      p e
      e
    end
  end
end
