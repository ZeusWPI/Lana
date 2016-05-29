class CreateChatMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :chat_messages do |t|
      t.references :user, index: true, null: false
      t.text :content

      t.timestamps null: false
    end
    add_foreign_key :chat_messages, :users
  end
end
