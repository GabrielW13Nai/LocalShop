# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding......."

Merchant.create(name:"Brian Wambora")

# ItemAdmin.create(name:"Joe Biden",admin_id:1)

1.times do

  1.times do
    merchant = Merchant.order('RANDOM()').first
  Admin.create(
    name: Faker::Name.middle_name,
    merchant_id: merchant.id
  )

end
end

15.times do

  1.times do
    admin= Admin.order('RANDOM()').first

 Clerk.create(
    name: Faker::Name.name,
    admin_id: admin.id,
  )

end
end


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







Item.create(name:"Cofee_Table",quantity:3,destroyed_items:1,status_of_item:"paid",buying_price:15000,selling_price:20000,clerk_id:1)
Item.create(name:"Folding_Chair",quantity:26,destroyed_items:4,status_of_item:"unpaid",buying_price:3000,selling_price:7000,clerk_id:10)
Item.create(name:"Console_Table",quantity:4,destroyed_items:2,status_of_item:"upaid",buying_price:30000,selling_price:35000,clerk_id:4)
Item.create(name:"Bed",quantity:20,destroyed_items:4,status_of_item:"paid",buying_price:25000,selling_price:20000,clerk_id:5)
Item.create(name:"Sofa_Set",quantity:4,destroyed_items:1,status_of_item:"paid",buying_price:60000,selling_price:120000,clerk_id:1)
Item.create(name:"Cabinet",quantity:8,destroyed_items:0,status_of_item:"paid",buying_price:15000,selling_price:20000,clerk_id:2)
Item.create(name:"Sideboard",quantity:33,destroyed_items:3,status_of_item:"paid",buying_price:11600,selling_price:15000,clerk_id:15)
Item.create(name:"Desk",quantity:10,destroyed_items:1,status_of_item:"paid",buying_price:1500,selling_price:2000,clerk_id:6)
Item.create(name:"Cupboard",quantity:36,destroyed_items:12,status_of_item:"unpaid",buying_price:4000,selling_price:7000,clerk_id:3)
Item.create(name:"Baby_Cot",quantity:22,destroyed_items:5,status_of_item:"paid",buying_price:22000,selling_price:24000,clerk_id:12)


puts "seeded"
