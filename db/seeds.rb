<<<<<<< HEAD
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding......."

2.times {
  Merchant.create(
    name: ["Dr Matress", "Furniture Palace"].sample
  )}



20.times {
  Item.create(
    name: Faker::House.furniture,
    stock_number: rand(1..100),
    image_url: ['https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbEIpL8QoUTa6z0QykJZrmVkYwcQZSFJB0A9sseXXcHbfhkHmtunv_yggpEVFXp0J8z2LyYjhVGmQHmzzXJxqEvW5mBRaSI9hX0zlm5XAgFoOyDSncp_K4U6ZH-Qy-qPryaIs&usqp=CAc', 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/1144531/1.jpg?2105', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbuUF3VgQpbSmokBIp73V1O12ONYhnR6_sdisJED4ejQqLmdpOD5o4RJCvd9ouNmR_4s1b3vk-SVFcRwtjCxFL9gOEVYrAIALEKWrE3X5GVtQFonNwher21BRdMg7VybD2FFM&usqp=CAc', 'https://libertyfurniture.co.ke/wp-content/uploads/2021/12/light-grey-5-by-6-chester-bed-with-2-side-drawers-and-an-ottoman.webp'].sample,
  )
}


8.times do

  1.times do
    merchant = Merchant.order('RANDOM()').first
  Admin.create(
    name: Faker::Name.middle_name,
    merchant_id: merchant.id
  )

end
end
=======
Merchant.create(name:"Brian Wambora")

Admin.create(name:"John Doe",merchant_id:1)

ItemAdmin.create(name:"Joe Biden",admin_id:1)
>>>>>>> 40f7d7607b1dd439323445adc61034856ee234f5




<<<<<<< HEAD
120.times do

  1.times do
    item = Item.order('RANDOM()').first
    admin = Admin.order('RANDOM()').first

  ItemAdmin.create(
    item_id: item.id,
    admin_id: admin.id,
    payment_status: ['Pending', 'Paid'].sample,
    condition_of_item: ['Good condition', 'Average condition', 'Poor condition', 'Broken'].sample
  )

end
end

60.times do

  1.times do
    admin= Admin.order('RANDOM()').first

 Clerk.create(
    name: Faker::Name.name,
    admin_id: admin.id,
  )

end
end




puts "seeded"
=======
Item.create(name:"Cofee_Table",quantity:3,destroyed_items:1,status_of_item:"paid",buying_price:15000,selling_price:20000,item_admin_id:1)
Item.create(name:"Folding_Chair",quantity:26,destroyed_items:4,status_of_item:"unpaid",buying_price:3000,selling_price:7000,item_admin_id:1)
Item.create(name:"Console_Table",quantity:4,destroyed_items:2,status_of_item:"upaid",buying_price:30000,selling_price:35000,item_admin_id:1)
Item.create(name:"Bed",quantity:20,destroyed_items:4,status_of_item:"paid",buying_price:25000,selling_price:20000,item_admin_id:1)
Item.create(name:"Sofa_Set",quantity:4,destroyed_items:1,status_of_item:"paid",buying_price:60000,selling_price:120000,item_admin_id:1)
Item.create(name:"Cabinet",quantity:8,destroyed_items:0,status_of_item:"paid",buying_price:15000,selling_price:20000,item_admin_id:1)
Item.create(name:"Sideboard",quantity:33,destroyed_items:3,status_of_item:"paid",buying_price:11600,selling_price:15000,item_admin_id:1)
Item.create(name:"Desk",quantity:10,destroyed_items:1,status_of_item:"paid",buying_price:1500,selling_price:2000,item_admin_id:1)
Item.create(name:"Cupboard",quantity:36,destroyed_items:12,status_of_item:"unpaid",buying_price:4000,selling_price:7000,item_admin_id:1)
Item.create(name:"Baby_Cot",quantity:22,destroyed_items:5,status_of_item:"paid",buying_price:22000,selling_price:24000,item_admin_id:1)


>>>>>>> 40f7d7607b1dd439323445adc61034856ee234f5
