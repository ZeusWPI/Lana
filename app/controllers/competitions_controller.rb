class CompetitionsController < ApplicationController
  def index
    @competitions = Competition.all
  end

  def show
  end

  def new
    @competition = Competition.new
  end

  def create
    @competition = Competition.new(competition_params)

    respond_to do |format|
      if @competition.save
        format.html { redirect_to @competition, notice: 'Competition was successfully created.' }
        format.json { render :show, status: :created, location: @competition }
      else
        format.html { render :new }
        format.json { render json: @competition.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def competition_params
    params.require(:competition).permit(:name, :game_id, :starttime)
  end
end
