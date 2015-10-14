module ActionChannel
  class Channel < ApplicationCable::Channel
    extend Forwardable
    include ChannelHelpers
    attr_reader :reducer
    def_delegator :reducer, :reduce

    def initialize(*args)
      super(*args)
      @reducer = self.class.reducer_class.new(self)
    end

    # 'controller' endpoint
    def action data
      action = get_action data
      reduce(action)
      publish(action)
    end

    def subscribed
      snapshot.try {|s| transmit(s)}
      subscribe
    end

    def subscribe
      # implement in subclass
    end

    def publish action
      # implement in subclass
    end

    def snapshot
      # optionally implement in subclass
    end

    private
    def get_action data
      Action.new(data['type'], data['payload'])
    end
  end
end
