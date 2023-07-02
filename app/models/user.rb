class User < ApplicationRecord
  has_secure_password
  has_many :items

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true
  validates :password, presence: true

end
