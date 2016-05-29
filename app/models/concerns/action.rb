class Action
  attr_accessor :namespace, :method, :payload

  def initialize namespace, method, payload
    self.namespace = namespace
    self.method = method
    self.payload = payload
  end

  def as_json options
    { type: "#{self.namespace}##{self.method}",
      payload: payload.as_json(options)
    }
  end

  def broadcast channel=nil
    channel ||= 'actions'
    ActionCable.server.broadcast(channel, self)
  end
end
