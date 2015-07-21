# == Schema Information
#
# Table name: competitions
#
#  id         :integer          not null, primary key
#  game_id    :integer
#  name       :string
#  starttime  :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Competition < ActiveRecord::Base
  belongs_to :game
end
