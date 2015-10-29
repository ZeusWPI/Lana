class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false, index: true
      t.string :token, null: false, index: true

      t.timestamps null: false
    end
  end
end
