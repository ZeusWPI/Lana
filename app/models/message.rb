class Message < ActiveRecord::Base
  extend Broadcastable
  belongs_to :user
  belongs_to :group

  def as_json(options)
    self.attributes.slice(
      'id', 'contents', 'user_id', 'group_id')
  end
end
