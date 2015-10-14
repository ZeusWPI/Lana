class Action
  attr_accessor :type, :payload

  def initialize type, payload
    self.type = type
    self.payload = payload
  end

  def to_h
    { type: type,
      payload: payload }
  end

  def to_json
    # This uses active_model_serializers for converting models
    ActionController::Base.render json: self.to_h
  end
end
