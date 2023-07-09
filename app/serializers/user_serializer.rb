class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :phone_number, :user_image, :role_id

  belongs_to :role
end
