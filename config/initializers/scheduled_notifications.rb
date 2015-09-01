module Lana
  class Application < Rails::Application
    config.after_initialize do
      Notification.where("scheduled_at > ?", Time.now).each do |notification|
        notification.schedule_notification
      end
    end
  end
end
