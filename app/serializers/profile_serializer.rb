class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :image_url
  has_one :user
end
