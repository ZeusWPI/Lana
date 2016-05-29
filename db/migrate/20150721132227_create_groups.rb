class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.references :game, index: true, null: false
      t.string :name
      t.text :notes
      t.integer :max_users

      t.timestamps null: false
    end
    add_foreign_key :groups, :games
  end
end
