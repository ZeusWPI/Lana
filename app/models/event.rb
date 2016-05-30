# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text             default(""), not null
#  moment      :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  game_id     :integer
#

class Event < ApplicationRecord
  extend Broadcastable
  belongs_to :game

  def as_json(_options)
    attributes.slice('id', 'name', 'moment', 'description', 'game_id')
  end
end
