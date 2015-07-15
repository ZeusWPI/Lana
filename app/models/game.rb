# == Schema Information
#
# Table name: games
#
#  id                 :integer          not null, primary key
#  title              :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Game < ActiveRecord::Base
  has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" }
end
