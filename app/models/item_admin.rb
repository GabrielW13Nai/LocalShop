class ItemAdmin < ApplicationRecord
  has_many :items
  belongs_to :admin
end
