class GamesReducer < Reducer
  def snapshot
    Game.action(:receive, Game.all)
  end
end
