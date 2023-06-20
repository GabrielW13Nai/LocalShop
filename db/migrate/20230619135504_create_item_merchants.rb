class CreateItemMerchants < ActiveRecord::Migration[7.0]
  def change
    create_table :item_merchants do |t|
      t.references :item, null: false, foreign_key: true
      t.references :merchant, null: false, foreign_key: true
      t.string :payment_status

      t.timestamps
    end
  end
end
