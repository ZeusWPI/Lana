class AddSchedulingToNotifications < ActiveRecord::Migration
  def change
    add_column :notifications, :scheduled_at, :datetime
  end
end
