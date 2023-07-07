class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :phone_number, :user_image

  belongs_to :role
end
