# == Schema Information
#
# Table name: groups
#
#  id         :integer          not null, primary key
#  game_id    :integer
#  notes      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  max_users  :integer
#

class Group < ActiveRecord::Base
  extend Broadcastable
  belongs_to :game
  has_many :memberships
  has_many :users, through: :memberships,
    after_remove: [:broadcast_leave, :delete_if_empty]

  def as_json(options)
    self.attributes.slice(
      'id', 'name', 'game_id', 'notes', 'max_users'
    ).merge(members: users.pluck(:id))
  end

  private
  def broadcast_leave user
    Membership.action(:delete, {
      group_id: self.id,
      user_id: user.id
    }).broadcast
  end

  def delete_if_empty last_user
    self.destroy if self.users.empty?
  end
end
