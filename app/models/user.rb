class User < ApplicationRecord
  belongs_to :role
  has_many :items, dependent: :destroy

  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: {in: 4..20, message: "Password must be between 4 and 20 characters"}
end
