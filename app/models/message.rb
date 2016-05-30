# == Schema Information
#
# Table name: messages
#
#  id        :integer          not null, primary key
#  user_id   :integer          not null
#  contents  :text             not null
#  timestamp :datetime         not null
#  group_id  :integer
#

class Message < ApplicationRecord
  extend Broadcastable
  belongs_to :user
  belongs_to :group
  validates :contents, presence: true

  def channel
    "group_#{group_id}" if group
  end

  def as_json(_options)
    attributes.slice('id', 'contents', 'user_id', 'group_id', 'timestamp')
  end
end
