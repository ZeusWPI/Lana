# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  group_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord
  extend Broadcastable
  belongs_to :user, dependent: :destroy
  belongs_to :group, dependent: :destroy

  def as_json(_options)
    attributes.slice('user_id', 'group_id')
  end
end
