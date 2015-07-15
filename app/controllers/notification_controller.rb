class NotificationController < ApplicationController
  def index
    @notifications = Notification.all
    @new_notification = Notification.new
  end

  def add
    content = params[:notification][:content]

    Rails.logger.debug params.inspect
    Notification.create content: content

    WebsocketRails[:all].trigger :message, content
    redirect_to :action => 'index'
  end
end
