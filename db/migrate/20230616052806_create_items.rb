class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :stock_number_received
      t.string :status_of_item

      t.timestamps
    end
  end
end
