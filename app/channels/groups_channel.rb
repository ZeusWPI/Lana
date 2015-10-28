class GroupsChannel < ActionChannel::Channel
  channel :groups

  def snapshot
    Action.new(:receive_groups, Group.all)
  end

  reducer do
    def add_group group
      Group.new group
    end

    def join_group params
      # TODO lol like this'll work
      group = Group.find params["id"]
      group.users << connection.current_user
    end
  end
end
