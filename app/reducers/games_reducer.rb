class GamesReducer < Reducer
  def snapshot
    Game.event(:receive, Game.all)
  end
end
