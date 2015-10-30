class Reducer
  attr_reader :channel

  extend Forwardable
  def_delegator :channel, :connection
  def_delegator :connection, :current_user

  def initialize channel
    @channel = channel
  end

  def reduce action
    self.send(action.type, action.payload)
  end
end
