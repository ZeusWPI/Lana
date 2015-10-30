module Broadcastable
  def self.extended base
    base.after_save do
      self.class.broadcast(:upsert, self)
    end

    base.after_destroy do
      self.class.broadcast(:delete, self.id)
    end
  end

  def broadcast method, payload
    ActionCable.server.broadcast(action(method, payload))
  end

  def action method, payload
    Action.new(action_type(method), payload)
  end

  def channel
    self.name.downcase.pluralize
  end

  def action_type method
    "#{self.name.downcase}##{method}"
  end
end
