class ActionChannel < ApplicationCable::Channel
  extend Forwardable
  def_delegator :@reducer, :reduce

  def initialize(*args)
    super(*args)
    @reducer = @@reducer_class.new(self)
  end

  # 'controller' endpoint
  def action data
    action = get_action data
    reduce(action)
  end

  def self.reducer &proc
    @@reducer_class = Class.new Reducer, &proc
  end

  private
  def get_action data
    Action.new(data['type'], data['payload'])
  end
end
