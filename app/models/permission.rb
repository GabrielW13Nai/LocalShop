class Permission < ApplicationRecord
  has_many :role_permissions
  has_many :roles,through: :role_permissions
  # has_many :users

  validates :name, presence: true
  validates :alias, presence: true
end
