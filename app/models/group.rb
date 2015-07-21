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
end
