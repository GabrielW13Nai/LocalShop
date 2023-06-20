class Admin < ApplicationRecord
  belongs_to :merchant
<<<<<<< HEAD
<<<<<<< HEAD
  has_many :items, through: :item_admin
=======
  has_many :item_admins
>>>>>>> 40f7d7607b1dd439323445adc61034856ee234f5
=======
  has_many :item_admins
>>>>>>> 543dd0d2252636f68b8f3f185a0173049329b0fe
end
