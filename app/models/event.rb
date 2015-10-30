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
#

class Event < ActiveRecord::Base
  extend Broadcastable

  def as_json(options)
    self.attributes.slice(
      'id', 'name', 'moment', 'description')
  end
end
