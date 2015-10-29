# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ActiveRecord::Base
  has_and_belongs_to_many :groups
  before_create :generate_token

  private
  def generate_token
    self.token = SecureRandom::base64(3)
  end
end
