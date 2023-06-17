class Admin < ApplicationRecord
  belongs_to :merchant
  has_many :item_admins
end
