class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :destroyed_items, :status_of_item, :buying_price, :selling_price, :user_id
end
