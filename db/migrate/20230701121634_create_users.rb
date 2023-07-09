class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :phone_number
      t.string :profile_image
      t.string :role

      t.timestamps
    end
  end
end
