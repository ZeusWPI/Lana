class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :name, index: true, null: false
      t.string :image_url
      t.text :notes, null: false, default: ''

      t.timestamps null: false
    end
  end
end
