class AddMaxUsersToGroups < ActiveRecord::Migration
  def change
    add_column :groups, :max_users, :integer
  end
end
