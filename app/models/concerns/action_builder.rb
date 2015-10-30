class ActionBuilder
  def initialize model
    @model = model
  end

  def broadcast method, payload
    ActionCable.server.broadcast(
      channel,
      action(method, payload))
  end

  def channel
    @model.name.downcase.pluralize
  end

  def action method, payload
    Action.new action_type(method), payload
  end

  def action_type method
    "#{@model.name.downcase}#{method}"
  end
end
