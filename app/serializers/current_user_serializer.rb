class CurrentUserSerializer < ActiveModel::Serializer
  attributes :id, :name, :token
end
