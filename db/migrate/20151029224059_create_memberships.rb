class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.references :user, index: true, foreign_key: true, null: false
      t.references :group, index: true, foreign_key: true, null: false

      t.timestamps
    end
  end
end
