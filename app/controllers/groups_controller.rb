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

    respond_to do |wants|
      if @group.save
        flash[:notice] = 'Group was successfully created.'
        wants.html { redirect_to(@group) }
        wants.xml { render :xml => @group, :status => :created, :location => @group }
      else
        p "test"
        wants.html { render :action => "new" }
        wants.xml { render :xml => @group.errors, :status => :unprocessable_entity }
      end
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
