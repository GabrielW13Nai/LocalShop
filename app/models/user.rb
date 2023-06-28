class User < ApplicationRecord
  has_many :roles
  has_many :permissions

  has_secure_password
  has_many :items

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true
  validates :password, presence: true

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: {in: 4..20, message: "Password must be between 4 and 20 characters"}
end
