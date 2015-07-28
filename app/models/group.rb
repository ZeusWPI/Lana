# == Schema Information
#
# Table name: groups
#
#  id         :integer          not null, primary key
#  game_id    :integer
#  notes      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Group < ActiveRecord::Base
  belongs_to :game
  has_and_belongs_to_many :users
end
