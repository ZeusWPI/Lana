class GroupsReducer < Reducer
  def snapshot
    Group.action(:receive, Group.all)
  end

  def create group
    Group.create! group.merge(users: [current_user], game: Game.first)
  end

  def join group
    Group.find(group['id']).users.push(current_user)
  end

  def leave group
    Group.find(group['id']).users.delete(current_user)
  end
end
