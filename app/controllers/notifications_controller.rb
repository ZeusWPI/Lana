class NotificationsController < ApplicationController
  def index
    @notifications = Notification.all
    @new_notification = Notification.new
  end

  def create
    noti = Notification.new(notification_params)
    noti.save!

    WebsocketRails[:all].trigger :message, params[:notification][:content]

    redirect_to :action => 'index'
  end

  private
  def notification_params
    params.require(:notification).permit(:content)
  end
end
