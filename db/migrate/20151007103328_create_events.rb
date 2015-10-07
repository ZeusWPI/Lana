class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|

      t.string :name, null: false
      t.text :description, null: false, default: ""
      t.timestamp :moment, null: false

      t.timestamps null: false
    end

    add_index :events, :moment
  end
end
