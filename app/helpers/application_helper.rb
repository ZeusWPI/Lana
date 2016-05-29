module ApplicationHelper
  def bootstrap_class_for(flash_type)
    types = {
      success: 'alert-success',
      error: 'alert-danger',
      alert: 'alert-warning',
      notice: 'alert-info'
    }
    
    types[flash_type] || flash_type.to_s
  end

  def flash_messages(_opts = {})
    flash.each do |msg_type, message|
      concat(content_tag(:div, message, class: "alert #{bootstrap_class_for(msg_type.to_sym)} fade in") do
        concat content_tag(:button, '&times;'.html_safe, class: 'close', data: { dismiss: 'alert' })
        concat message
      end)
    end
    nil
  end

  def latest_notifications
    Notification.where('scheduled_at < ?', Time.now).order(created_at: :desc).limit(5).each
  end
end
