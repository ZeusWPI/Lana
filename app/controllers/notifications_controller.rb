class NotificationsController < ApplicationController
  def index
    @notifications = Notification.all
    @new_notification = Notification.new
  end

  def create
    notification = Notification.new(notification_params)
    notification.save!

    schedule_notification(notification)

    redirect_to action: 'index'
  end

  private
  def notification_params
    params.require(:notification).permit(:content, :scheduled_at)
  end

  def schedule_notification(notification)
    s = Rufus::Scheduler.singleton

    s.jobs(tag: notification.id).each do |job|
      job.unschedule
    end

    s.at notification.scheduled_at, tag: notification.id do
      WebsocketRails[:all].trigger :message, params[:notification][:content]
    end
  end
end
