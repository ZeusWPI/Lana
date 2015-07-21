class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.references :game, index: true
      t.text :notes

      t.timestamps null: false
    end
    add_foreign_key :groups, :games
  end
end
