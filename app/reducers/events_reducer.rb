class EventsReducer < Reducer
  def snapshot
    Event.action(:receive, Event.all)
  end

  def create(event)
    Event.create! event
  end
end
