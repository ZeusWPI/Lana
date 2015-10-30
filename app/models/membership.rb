class Membership < ActiveRecord::Base
  extend Broadcastable
  belongs_to :user, dependent: :destroy
  belongs_to :group, dependent: :destroy
end
