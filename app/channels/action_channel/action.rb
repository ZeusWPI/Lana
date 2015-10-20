class Action
  attr_accessor :type, :payload

  def initialize type, payload
    self.type = type
    self.payload = payload
  end

  def as_json options
    { type: type,
      payload: serializable_payload
    }
  end

  private
  def serializable_payload
    ActiveModel::SerializableResource.new(payload).serializable_hash
  end
end
