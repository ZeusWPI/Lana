class GamesController < ApplicationController
  before_action :set_game, only: [:show, :edit, :update, :destroy]

  def index
    @games = Game.all
  end

  def show
  end

  private

  def set_game
    @game = Game.find(params[:id])
  end

  def competition_params
    params.require(:game).permit(:id)
  end
end
