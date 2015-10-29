class GroupsChannel < ActionChannel::Channel
  channel :groups

  def snapshot
    Action.new(:receive_groups, Group.all)
  end

  reducer do
    def add_group group
      g = Group.new group
      g.users.push connection.current_user
      g.game = Game.first #TODO: FIXME
      g.save!
      g
    end

    def join_group params
      group = Group.find params["id"]
      group.users << connection.current_user
      { user: connection.current_user.id,
        group: group.id
      }
    end

    def leave_group params
      group = Group.find params["id"]
      group.users.delete(connection.current_user)
      { user: connection.current_user.id,
        group: group.id
      }
    end
  end
end
