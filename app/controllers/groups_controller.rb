class GroupsController < ApplicationController
  def new
    @group = Group.new
  end

  def show
    @group = Group.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render xml: @group }
    end
  end

  def create
    @group = Group.new(group_params)

    if @group.save
      flash[:notice] = 'Group was successfully created.'
      redirect_to(@group)
    end
  end

  private

  def set_group
    @group = Group.find(params[:id])
  end

  def group_params
    params.require(:group).permit(:game_id, user_ids: [])
  end
end
