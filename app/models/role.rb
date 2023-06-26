class Role < ApplicationRecord
  has_many :role_permissions
  has_many :permissions,through: :role_permissions

  belongs_to :user

  validates :name, uniqueness: true
end
