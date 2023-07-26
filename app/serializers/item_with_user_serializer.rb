class ItemWithUserSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :destroyed_items, :status_of_item, :buying_price, :selling_price
  belongs_to :user

  def user
    {
      id: object.user.id,
      name: object.user.name,
      role_name: object.user.role.name
    }
  end
end
