class ItemAdmin < ApplicationRecord
  belongs_to :item
  belongs_to :admin
end
