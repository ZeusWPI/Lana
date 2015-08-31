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

  private

  def schedule_notification
    s = Rufus::Scheduler.singleton

    s.jobs(tag: self.id).each do |job|
      job.unschedule
    end

    s.at self.scheduled_at, tag: self.id do
      WebsocketRails[:all].trigger :message, self.content
    end
  end
end
