class CreateItemAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :item_admins do |t|
<<<<<<< HEAD:db/migrate/20230616203242_create_item_admins.rb
      t.belongs_to :item, null: false, foreign_key: true
      t.belongs_to :admin, null: false, foreign_key: true
      t.string :payment_status
      t.string :condition_of_item

=======
      t.string :name
      t.integer:admin_id
      
>>>>>>> 40f7d7607b1dd439323445adc61034856ee234f5:db/migrate/20230616053157_create_item_admins.rb
      t.timestamps
    end
  end
end
