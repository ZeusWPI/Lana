class AuthenticationChannel < ActionChannel::Channel
  def snapshot
    Action.new('login', self.current_user)
  end

  def publish action
    # only send this information to the user himself
    transmit(action)
  end

  reducer do
    # TODO: actually authenticate the user
    def login credentials
      u = User.find_or_create_by name: credentials['name']
      connection.current_user = u
    end
  end
end
