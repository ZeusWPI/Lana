require 'reducer_multiplexer'

class ActionChannel < ApplicationCable::Channel
  def subscribed
    reducer.send_snapshot
    stream_from 'actions'
  end

  def reduce(action)
    reducer.reduce(action['type'], action['payload'])
  end

  def reducer
    @reducer ||= ReducerMultiplexer.new(self)
  end
end
