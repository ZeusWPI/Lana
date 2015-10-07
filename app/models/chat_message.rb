# == Schema Information
#
# Table name: chat_messages
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChatMessage < ActiveRecord::Base
  belongs_to :user
  validates :user, presence:true
  validates :content, presence:true
end
