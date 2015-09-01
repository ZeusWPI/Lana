class NotificationsController < ApplicationController
  def index
    @notifications = Notification.all
    @new_notification = Notification.new
  end

  def create
    notification = Notification.new(notification_params)
    notification.save!

    redirect_to action: 'index'
  end

  private
  def notification_params
    params.require(:notification).permit(:content, :scheduled_at)
  end
end
