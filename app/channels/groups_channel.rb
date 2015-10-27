class GroupsChannel < ActionChannel::Channel
  channel :groups

  def snapshot
    Action.new(:receive_groups, Group.all)
  end

  reducer do
    def add_group group
      Group.new group
    end

    def join_group group
      # TODO lol like this'll work
      group.users << connection.current_user
    end
  end
end
