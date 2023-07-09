class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :phone_number, :user_image, :role

end
