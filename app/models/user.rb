class User < ApplicationRecord
  has_many :roles
  has_many :permissions

  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: {in: 6..20, message: "Password must be between 6 and 20 characters"}
end
