class AddPasswordDigestToClerk < ActiveRecord::Migration[7.0]
  def change
    add_column :clerks, :password_digest, :string
  end
end
