class CreateItemAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :item_admins do |t|
      t.string :name
      t.integer:admin_id
      
      t.timestamps
    end
  end
end
