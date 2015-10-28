class GroupsChannel < ActionChannel::Channel
  channel :groups

  def snapshot
    Action.new(:receive_groups, Group.all)
  end

  reducer do
    def add_group group
      Group.create! group
    end

    def join_group params
      group = Group.find params["id"]
      group.users << connection.current_user
      group.save!
      { user: current_user.id,
        group: group.id
      }
    end
  end
end
