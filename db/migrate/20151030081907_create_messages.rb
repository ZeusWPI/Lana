class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.references :user, null: false
      t.text :contents, null: false
      t.timestamp :timestamp, null: false

      t.references :group
    end
    add_foreign_key :messages, :users
    add_foreign_key :messages, :groups
  end
end
