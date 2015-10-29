class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|

      t.string :name, null: false
      t.text :description, null: false, default: ""
      t.timestamp :moment, null: false, index: true

      t.timestamps null: false
    end
  end
end
