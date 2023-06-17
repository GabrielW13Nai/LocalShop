class Admin < ApplicationRecord
  belongs_to :merchant
  has_many :items, through: :item_admin
end
