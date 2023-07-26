class User < ApplicationRecord

  has_many :items, dependent: :destroy
  belongs_to :role, dependent: :destroy

  has_secure_password
  enum role: { superadmin: 0, admin: 1, clerk: 2 }

  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 8 }, allow_nil: true
  validates :password_confirmation, presence: true, if: :password

  validate :role_name_validation

  private

  def role_name_validation
    role_name = role&.name
    return unless role_name

    validate_name_inclusion(role_name)
  end

  def validate_name_inclusion(keyword)
    unless name&.downcase&.include?(keyword.downcase)
      errors.add(:name, "must include '#{keyword.downcase}' for #{role_name} role")
    end
  end
end

