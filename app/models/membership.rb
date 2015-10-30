class Membership < ActiveRecord::Base
  extend Broadcastable
  belongs_to :user, dependent: :destroy
  belongs_to :group, dependent: :destroy

  def as_json(options)
    self.attributes.slice('user_id', 'group_id')
  end
end
