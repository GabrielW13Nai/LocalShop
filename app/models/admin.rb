class Admin < ApplicationRecord
  has_secure_password
  belongs_to :merchant
  has_many :items, through: :item_admin

end
