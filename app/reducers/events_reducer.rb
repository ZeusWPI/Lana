class EventsReducer
  def self.add_event event
    Event.create event
  end
end
