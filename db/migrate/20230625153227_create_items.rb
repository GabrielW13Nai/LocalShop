class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :quantity
      t.integer :destroyed_items
      t.string :status_of_item
      t.integer :buying_price
      t.integer :selling_price
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
