class Reducer
  extend Forwardable
  attr_reader :channel
  def_delegators :channel, :connection, :transmit, :stream_from
  def_delegators :connection, :current_user, :current_user=

  def initialize(channel)
    @channel = channel
  end

  def reduce(method, params)
    send(method, params)
  end

  # Optionally return an action that sets the initial state
  def snapshot
  end

  def send_snapshot
    snapshot.try { |s| transmit(s) }
  end
end
