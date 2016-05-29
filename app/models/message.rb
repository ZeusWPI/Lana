class Message < ActiveRecord::Base
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
