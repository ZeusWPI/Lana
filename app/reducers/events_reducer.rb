class EventsReducer < Reducer
  def snapshot
    { type: 'event#receive',
      payload: Event.all
    }
  end

  def create event
    Event.create! event
  end
end
