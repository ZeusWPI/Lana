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

require 'test_helper'

class CompetitionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
