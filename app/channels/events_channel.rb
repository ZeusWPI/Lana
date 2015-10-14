class EventsChannel < ActionChannel::Base
  channel :events

  def initialize *args
    super(*args)
    @reducer = EventsReducer
  end

  def snapshot
    Action.new(:receive_events, Event.all).to_json
  end
end
