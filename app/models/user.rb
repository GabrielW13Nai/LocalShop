class User < ApplicationRecord
  has_secure_password
  has_many :items

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true
  validates :password, presence: true

  before_create :generate_activation_token

  private

  def generate_activation_token
    self.activation_token = SecureRandom.urlsafe_base64
  end
end
