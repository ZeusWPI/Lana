class ModelChannel < ActionChannel
  class << self
    attr_accessor :model
  end

  def action *args
    self.class.model.action(*args)
  end

  def subscribed
    stream_from self.class.model.name.downcase.pluralize
    transmit(action(:receive, snapshot))
  end

  def snapshot
    self.class.model.all
  end
end
