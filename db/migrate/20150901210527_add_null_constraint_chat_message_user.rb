class AddNullConstraintChatMessageUser < ActiveRecord::Migration
  def change
    change_column_null :chat_messages, :user_id, false
  end
end
