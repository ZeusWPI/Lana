module ActionChannel
  class Reducer
    attr_reader :channel

    extend Forwardable
    def_delegator :channel, :connection

    def initialize channel
      @channel = channel
    end

    # A reducer method should return an updated payload
    def reduce action
      action.payload = self.send(action.type, action.payload)
    end
  end
end
