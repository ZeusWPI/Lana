module ActionChannel
  class Base < ApplicationCable::Channel
    include Helpers
    attr_reader :reducer

    # 'controller' endpoint
    def action data
      action = get_action data
      action.payload = reducer.send(action.type, action.payload)
      publish(action.to_json)
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
