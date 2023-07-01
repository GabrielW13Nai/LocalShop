

puts "seeding......."
users = [
  {name: "John Doe", email: "john@example.com", password_digest: "password123", phone_number: "1234567890", role: "admin"},
  {name: "Jane Smith", email: "jane@example.com", password_digest: "pass321word", phone_number: "9876543210",role: "user"},
  {name: "Peter Parker", email: "peter@example.com", password_digest: "pass456word", phone_number: "7294732102",role: "super_admin"}
]
users.each do |user_data|
  User.create(user_data)
end

items = [
  { name: "Dining table", quantity: 10,destroyed_items: 2,status_of_item: "active",buying_price: 5.99, selling_price: 9.99, user_id: 1},
  { name: "Foldable chair",quantity: 5, destroyed_items: 0,status_of_item: "active",buying_price: 8.99, selling_price: 14.99,user_id: 1},
  {name: "TV Console", quantity: 3, destroyed_items: 1, status_of_item: "inactive", buying_price: 6.99, selling_price: 11.99, user_id: 2 }
]

items.each do |item_data|
  Item.create!(item_data)
end

puts "seeding done!"
