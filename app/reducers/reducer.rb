class Reducer
  extend Forwardable
  attr_reader :channel
  def_delegators :channel, :connection, :transmit
  def_delegators :connection, :current_user

  def initialize channel
    @channel = channel
  end

  def reduce method, params
    self.send(method, params)
  end

  # Optionally return an action that sets the initial state
  def snapshot
  end

  def send_snapshot
    self.snapshot.try {|s| transmit(s)}
  end
end
