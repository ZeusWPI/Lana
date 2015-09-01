# == Schema Information
#
# Table name: notifications
#
#  id         :integer          not null, primary key
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notification < ActiveRecord::Base
  after_save :schedule_notification

  def trigger_notification
    WebsocketRails[:all].trigger :message, self.content
  end

  def schedule_notification
    s = Rufus::Scheduler.singleton

    s.jobs(tag: self.id).each do |job|
      job.unschedule
    end

    s.at self.scheduled_at, tag: self.id do
      self.trigger_notification
    end
  end

end
