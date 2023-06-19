class Admin < ApplicationRecord
  belongs_to :merchant
<<<<<<< HEAD
  has_many :items, through: :item_admin
=======
  has_many :item_admins
>>>>>>> 40f7d7607b1dd439323445adc61034856ee234f5
end
