class AddPasswordDigestToMerchant < ActiveRecord::Migration[7.0]
  def change
    add_column :merchants, :password_digest, :string
  end
end
