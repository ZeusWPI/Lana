module Broadcastable
  def self.extended base
    base.after_save do
      Action.new(self.class.name.downcase, :upsert, self).broadcast
    end

    base.after_destroy do
      Action.new(self.class.name.downcase, :delete, self.id).broadcast
    end
  end
end
