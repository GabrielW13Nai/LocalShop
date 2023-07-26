class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :destroyed_items, :status_of_item, :buying_price, :selling_price
  belongs_to :user

  def user
    user = object.user
    {
      id: user.id,
      name: user.name,
      role: {
        id: user.role.id,
        name: user.role.name,
        created_at: user.role.created_at,
        updated_at: user.role.updated_at
      }
    }
  end
end
