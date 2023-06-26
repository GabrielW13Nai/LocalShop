class CreateRolePermissions < ActiveRecord::Migration[7.0]
  def change
    create_table :role_permissions do |t|
      t.belongs_to :role, null: false, foreign_key: true
      t.belongs_to :permission, null: false, foreign_key: true

      t.timestamps
    end
  end
end
