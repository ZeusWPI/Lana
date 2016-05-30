# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  token      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  admin      :boolean          default(FALSE), not null
#

class User < ApplicationRecord
  extend Broadcastable
  has_many :memberships
  has_many :groups, through: :memberships

  before_create :generate_token

  private

  def generate_token
    self.token = SecureRandom.base64(3)
  end
end
