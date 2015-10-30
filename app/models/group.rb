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
  has_many :users, through: :memberships
end
