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

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
