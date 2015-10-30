class UsersReducer < Reducer
  def send_snapshot
    current_user.try do |u|
      transmit( User.action(:login, u.attributes.slice('id', 'token')))
    end
    transmit(User.action(:receive, User.all))
  end
end
