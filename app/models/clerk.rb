class Clerk < ApplicationRecord
  belongs_to :admin
  has_many :items
end
