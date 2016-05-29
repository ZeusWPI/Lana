class Membership < ActiveRecord::Base
  extend Broadcastable
  belongs_to :user, dependent: :destroy
  belongs_to :group, dependent: :destroy

  def as_json(_options)
    attributes.slice('user_id', 'group_id')
  end
end
