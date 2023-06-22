class Clerk < ApplicationRecord
  has_secure_password
  belongs_to :admin
end
