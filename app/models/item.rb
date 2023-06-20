class Item < ApplicationRecord
    belongs_to :clerk
    validates :status_of_item, inclusion: {in: ['paid','unpaid']}
    validates :name, presence: true
end
