class ItemMerchant < ApplicationRecord
  belongs_to :item
  belongs_to :merchant
end
