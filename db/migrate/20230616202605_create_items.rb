class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
<<<<<<< HEAD:db/migrate/20230616202605_create_items.rb
      t.integer :stock_number
      t.string :image_url
=======
      t.integer :quantity
      t.integer:destroyed_items
      t.string :status_of_item
      t.integer:buying_price
      t.integer:selling_price
      t.integer:item_admin_id
>>>>>>> 40f7d7607b1dd439323445adc61034856ee234f5:db/migrate/20230616052806_create_items.rb

      t.timestamps
    end
  end
end
