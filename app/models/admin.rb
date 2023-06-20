class Admin < ApplicationRecord
  belongs_to :merchant
  has_many :clerks
  has_many :items, through: :clerks
end
