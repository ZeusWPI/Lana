class AddUniqueIndexToGroupsUsers < ActiveRecord::Migration
  def change
    add_index :groups_users, [:group_id, :user_id], unique: true
  end
end
