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




puts "seeded"
