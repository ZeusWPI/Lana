class GroupsChannel < ActionChannel::Channel
  channel :groups

  def snapshot
    Action.new(:receive_groups, Group.all)
  end
end
