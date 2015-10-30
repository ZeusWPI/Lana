class Reducer
  extend Forwardable
  attr_reader :channel
  def_delegator :channel, :transmit

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
