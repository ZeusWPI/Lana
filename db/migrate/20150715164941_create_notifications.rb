class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.text :content

      t.timestamps null: false
    end
  end
end
