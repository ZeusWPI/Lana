class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :max_users
  attribute :game_id, key: :game

  has_many :members

  def members
    object.users.pluck(:id)
  end
end
