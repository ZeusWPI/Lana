class EventsChannel < ActionChannel::Channel
  channel :events

  def snapshot
    Action.new(:receive_events, Event.all)
  end

  reducer do
    def add_event event
      Event.create! event
    end
  end
end
