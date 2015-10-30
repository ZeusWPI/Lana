module Broadcastable
  def self.extended base
    base.after_save do
      self.class.action(:upsert, self).broadcast
    end
    base.after_destroy do
      self.class.action(:delete, self.id).broadcast
    end
  end

  def action method, payload
    Action.new(self.name.downcase, method, payload)
  end
end
