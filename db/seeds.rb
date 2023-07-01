

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

begin

  guest = Role.create!(name: "guest", description: "This is a guest account")

rescue

  puts
  "Guest account creation already done"
end

RolePermission.destroy_all


# ActiveRecord::Base.connection.execute("TRUNCATE TABLE role_permissions RESTART IDENTITY")

RolePermission.create!(role_id: super_user_role.id, permission_id: all_permissions.id)
RolePermission.create!(role_id: admin_role.id, permission_id: create_admin_permissions.id)
RolePermission.create!(role_id: admin_role.id, permission_id: update_admin_permissions.id)
RolePermission.create!(role_id: admin_role.id, permission_id: delete_admin_permissions.id)




begin
  super_admin = User.create!(name: "Mary", email: "mary@superuser.com", password: "123456", phone_number: 254732422333, user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMGEmJg0U1cedvxLtkdEpCxVJRxLDsBaiHA&usqp=CAU", role_id: super_user_role.id )
rescue
  puts "Super admin already created"
    super_admin = User.find_by!(name: "Mary")
end

Item.create(name:"Cofee Table",quantity:3,destroyed_items:1,status_of_item:"paid",buying_price:15000,selling_price:20000,image:"https://blackbeaninteriors.co.ke/wp-content/uploads/2018/08/IMG-1058.jpg",user_id:4)
Item.create(name:"Folding Chair",quantity:26,destroyed_items:4,status_of_item:"unpaid",buying_price:3000,selling_price:7000,image:"https://target.scene7.com/is/image/Target/GUEST_cc16dd0b-6f36-471c-b76e-a340deca799a?wid=488&hei=488&fmt=pjpeg",user_id:7)
Item.create(name:"Console Table",quantity:4,destroyed_items:2,status_of_item:"unpaid",buying_price:30000,selling_price:35000,image:"https://secure.img1-cg.wfcdn.com/im/96384588/compr-r85/1242/124226021/vollmer-solid-wood-console-table.jpg",user_id:6)
Item.create(name:"Bed",quantity:20,destroyed_items:4,status_of_item:"paid",buying_price:25000,selling_price:20000,image:"https://www.ulcdn.net/images/products/358582/original/Alexander_King_Bed_With_Hydraulic_Storage_LP.jpg?1627127099",user_id:5)
Item.create(name:"Sofa Set",quantity:4,destroyed_items:1,status_of_item:"paid",buying_price:60000,selling_price:120000,image:"https://m.economictimes.com/thumb/msid-99397683,width-1500,height-1125,resizemode-4,imgsize-193620/810nzuwikel-_sl1500_.jpg",user_id:9)
Item.create(name:"Cabinet",quantity:8,destroyed_items:0,status_of_item:"paid",buying_price:15000,selling_price:20000,image:"https://m.media-amazon.com/images/I/712qmZ9K1kL.jpg",user_id:3)
Item.create(name:"Sideboard",quantity:33,destroyed_items:3,status_of_item:"paid",buying_price:11600,selling_price:15000,image:"https://img5.su-cdn.com/cdn-cgi/image/width=600,height=600/mall/2021/04/10/fe3696bebbb14848addf9de5ee29b464.jpg",user_id:12)
Item.create(name:"Desk",quantity:10,destroyed_items:1,status_of_item:"paid",buying_price:1500,selling_price:2000,image:"https://target.scene7.com/is/image/Target/desks_SBL-Shape-SB-210908-1631102260329?wid=668&qlt=80&fmt=webp",user_id:6)
Item.create(name:"Cupboard",quantity:36,destroyed_items:12,status_of_item:"unpaid",buying_price:4000,selling_price:7000,image:"https://media.ethnicraft.com/sys-master/s3_product_medias/h58/h34/8821911846942/51455_Oak_Wave_storage_cupboard_2_WEB.jpg",user_id:5)
Item.create(name:"Baby Cot",quantity:22,destroyed_items:5,status_of_item:"paid",buying_price:22000,selling_price:24000,image:"https://www.kessbabyshop.co.ke/wp-content/uploads/2021/06/Cot-mosquito-net.jpg",user_id:4)




puts "seeded"

# Merchant.create(name:"Brian Wambora")

# # ItemAdmin.create(name:"Joe Biden",admin_id:1)

# 1.times do

#   1.times do
#     merchant = Merchant.order('RANDOM()').first
#   Admin.create(
#     name: Faker::Name.middle_name,
#     merchant_id: merchant.id
#   )

# end
# end

# 15.times do

#   1.times do
#     admin= Admin.order('RANDOM()').first

#  Clerk.create(
#     name: Faker::Name.name,
#     admin_id: admin.id,
#   )

# end
# end


# 120.times do

#   1.times do
#     item = Item.order('RANDOM()').first
#     admin = Admin.order('RANDOM()').first

#   ItemAdmin.create(
#     item_id: item.id,
#     admin_id: admin.id,
#     payment_status: ['Pending', 'Paid'].sample,
#     condition_of_item: ['Good condition', 'Average condition', 'Poor condition', 'Broken'].sample
#   )

# end
# end
