# == Schema Information
#
# Table name: games
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  image_url  :string
#  notes      :text             default(""), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Game < ApplicationRecord
  extend Broadcastable
  has_many :groups
  has_many :events
end
