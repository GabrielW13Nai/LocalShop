

puts "seeding......."



begin
  super_user_role = Role.create!(name: "Super User", description: "This is the super user of the system")
  admin_role = Role.create!(name: "Admin", description: "This is the admin of the system")
  clerk_role = Role.create!(name: "Clerk", description: "This is the clerk of the system")

rescue

  puts "skipped"
  super_user_role = Role.find_by!(name:"Super User")
  admin_role = Role.find_by!(name:"Admin")
  clerk_role = Role.find_by!(name: "Clerk")

end

user1 = User.create(name: "James", email: "james@superusercom", password: "123456", phone_number: 254732422333, user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMGEmJg0U1cedvxLtkdEpCxVJRxLDsBaiHA&usqp=CAU", role_id: admin_role.id )

10.times {User.create(
  name: Faker::Name.name,
  email: Faker::Internet.email ,
  password: "123456",
  phone_number: 253444333,
  user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMGEmJg0U1cedvxLtkdEpCxVJRxLDsBaiHA&usqp=CAU",
  role_id: clerk_role.id
)}


begin
  all_permissions = Permission.create!(name: "all", alias: "*")
  create_admin_permissions = Permission.create!(name: "Create admin", alias: "create_admin")
  update_admin_permissions = Permission.create!(name: "Update admin", alias: "update_admin")
  delete_admin_permissions = Permission.create!(name: "Delete admin", alias: "delete_admin")

  create_clerk_permissions = Permission.create(name: "Create item", alias: "create_item")
  update_clerk_permissions = Permission.create(name: "Update item", alias: "update_item")
  delete_clerk_permissions = Permission.create(name: "Delete item", alias: "delete_item")
rescue
  puts "Permission existing"
  all_permissions =  Permission.find_by!(alias: "*")
  create_admin_permissions = Permission.find_by!(alias: "create_admin")
  update_admin_permissions = Permission.find_by!(alias: "update_admin")
  delete_admin_permissions = Permission.find_by!(alias: "delete_admin")

  create_clerk_permissions = Permission.find_by(alias: "create_item")
  update_clerk_permissions = Permission.find_by(alias: "update_item")
  delete_clerk_permissions = Permission.find_by(alias: "delete_item")
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
  super_admin = User.create!(name: "Mary", email: "mary@superusercom", password: "123456", phone_number: 254732422333, user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMGEmJg0U1cedvxLtkdEpCxVJRxLDsBaiHA&usqp=CAU", role_id: super_user_role.id )
rescue
  puts "Super admin already created"
    super_admin = User.find_by!(name: "Mary")
end

Item.create(name:"Cofee_Table",quantity:3,destroyed_items:1,status_of_item:"paid",buying_price:15000,selling_price:20000,user_id:4)
Item.create(name:"Folding_Chair",quantity:26,destroyed_items:4,status_of_item:"unpaid",buying_price:3000,selling_price:7000,user_id:7)
Item.create(name:"Console_Table",quantity:4,destroyed_items:2,status_of_item:"unpaid",buying_price:30000,selling_price:35000,user_id:6)
Item.create(name:"Bed",quantity:20,destroyed_items:4,status_of_item:"paid",buying_price:25000,selling_price:20000,user_id:5)
Item.create(name:"Sofa_Set",quantity:4,destroyed_items:1,status_of_item:"paid",buying_price:60000,selling_price:120000,user_id:9)
Item.create(name:"Cabinet",quantity:8,destroyed_items:0,status_of_item:"paid",buying_price:15000,selling_price:20000,user_id:3)
Item.create(name:"Sideboard",quantity:33,destroyed_items:3,status_of_item:"paid",buying_price:11600,selling_price:15000,user_id:12)
Item.create(name:"Desk",quantity:10,destroyed_items:1,status_of_item:"paid",buying_price:1500,selling_price:2000,user_id:6)
Item.create(name:"Cupboard",quantity:36,destroyed_items:12,status_of_item:"unpaid",buying_price:4000,selling_price:7000,user_id:5)
Item.create(name:"Baby_Cot",quantity:22,destroyed_items:5,status_of_item:"paid",buying_price:22000,selling_price:24000,user_id:4)




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
