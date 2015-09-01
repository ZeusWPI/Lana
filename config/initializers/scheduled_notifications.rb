module Lana
  class Application < Rails::Application
    config.after_initialize do
      # Only run on rails server start
      if defined?(Rails::Server)
        Notification.where("scheduled_at > ?", Time.now).each do |notification|
          notification.schedule_notification
        end
      end
    end
  end
end
