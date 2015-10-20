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
  belongs_to :game
  has_and_belongs_to_many :users

  #validate :validate_max_users
  #validates :game, presence: true
  #validates :users, presence: true

  def usercount
    users.size
  end

  private

  def validate_max_users
    if max_users.present? && users.size > max_users then
      errors.add(:max_users, "has been exceeded.")
    end
  end
end
