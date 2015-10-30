class Action
  attr_accessor :type, :payload

  def initialize type, payload
    self.type = type
    self.payload = payload
  end

  def as_json options
    { type: type,
      payload: serializable_payload(options)
    }
  end

  private
  def serializable_payload options
    resource = ActiveModel::SerializableResource.new(self.payload)
    if resource.serializer?
      resource.serializable_hash
    else
      self.payload.as_json options
    end
  end
end
