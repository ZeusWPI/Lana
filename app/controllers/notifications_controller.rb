class NotificationsController < ApplicationController
  def index
    @notifications = Notification.all
    @new_notification = Notification.new
  end

  def create
    notification = Notification.new(notification_params)
    notification.save!

    Rufus::Scheduler.singleton.at notification.scheduled_at do
      WebsocketRails[:all].trigger :message, params[:notification][:content]
    end

    redirect_to action: 'index'
  end

  private
  def notification_params
    params.require(:notification).permit(:content, :scheduled_at)
  end
end
