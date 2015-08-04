class GroupsController < ApplicationController
  before_action :set_group, only: [:show, :edit, :update, :destroy]

  def new
    @group = Group.new
    @id = params[:game_id]
  end

  def show
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render xml: @group }
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @group.update(group_params)
        flash[:notice] = 'Group was successfully updated.'
        format.html { redirect_to(@group) }
        format.xml  { head :ok }
      else
        format.html { render action: 'edit' }
        format.xml  { render xml: @group.errors, status: :unprocessable_entity }
      end
    end
  end

  def create
    @group = Group.new(group_params)

    respond_to do |format|
      if @group.save
        format.html { redirect_to @group, notice: 'Group was successfully created.' }
      else
        format.html { render action: :new }
      end
    end
  end

  def destroy
    @group.destroy

    respond_to do |format|
      format.html { redirect_to @group.game, notice: 'Group was deleted succesfully!' }
      format.xml  { head :ok }
    end
  end

  private

  def set_group
    @group = Group.find(params[:id])
  end

  def group_params
    params.require(:group).permit(:notes, :game_id, user_ids: [])
  end
end
