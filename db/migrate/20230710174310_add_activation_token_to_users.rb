class AddActivationTokenToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :activation_token, :string
    add_index :users, :activation_token
    add_column :users, :activated, :boolean
  end
end
