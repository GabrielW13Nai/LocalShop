class CreateItemAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :item_admins do |t|
      t.belongs_to :item, null: false, foreign_key: true
      t.belongs_to :admin, null: false, foreign_key: true
      t.string :payment_status
      t.string :condition_of_item

      t.timestamps
    end
  end
end
