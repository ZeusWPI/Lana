class UsersChannel < ActionChannel::Channel
  channel :users

  def snapshot
    Action.new(:receive_users, User.all)
  end
end
