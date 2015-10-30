class AuthenticationChannel < ActionChannel
  def snapshot
    Action.new('login', login_payload) if self.current_user
  end

  def publish action
    # only send this information to the user himself
    transmit(action)
  end

  reducer do
    def login credentials
      connection.current_user = User.find_by! token: credentials['token']
      channel.login_payload
    end
  end

  def login_payload
    ActiveModel::SerializableResource.new(
      self.current_user,
      serializer: CurrentUserSerializer
    ).serializable_hash
  end
end
