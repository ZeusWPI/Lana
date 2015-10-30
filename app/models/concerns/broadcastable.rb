module Broadcastable
  def self.extended base
    base.include InstanceMethods
    base.after_create :broadcast_create
    base.after_update :broadcast_update
    base.after_destroy :broadcast_delete
  end

  def action method, payload
    Action.new(self.name.downcase, method, payload)
  end

  module InstanceMethods
    def broadcast_create
      self.class.action(:create, self).broadcast(channel)
    end

    def broadcast_update
      self.class.action(:upsert, self).broadcast(channel)
    end

    def broadcast_delete
      self.class.action(:delete, self.id).broadcast(channel)
    end

    def channel
    end
  end
end
