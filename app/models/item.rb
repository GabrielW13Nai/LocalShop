class Item < ApplicationRecord
    belongs_to :item_admin
    validates :status_of_item, inclusion: {in: ['paid','unpaid']}
    validates :name, presence: true
end
