puts "seeding......."

Role.destroy_all
User.destroy_all
Item.destroy_all

superadmin_role = Role.find_or_create_by(name: 'superadmin')
admin_role = Role.find_or_create_by(name: 'admin')
clerk_role = Role.find_or_create_by(name: 'clerk')


superadmin_user = User.create( 
  name: 'Superadmin User',
  email: 'superadmin@example.com',
  password: 'superadminpassword',
  phone_number: '1234576890',
  user_image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F717768062733698%2F&psig=AOvVaw0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3&ust=1625928760008000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjQ4ZqH0_ECFQAAAAAdAAAAABAD',
  password_confirmation: 'superadminpassword',
  role: superadmin_role
)
admin_user = User.create(
  name: 'Admin User',
  email: 'admin@example.com',
  password: 'adminpassword',
  phone_number: '1234567890',
  user_image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F717768062733698%2F&psig=AOvVaw0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3&ust=1625928760008000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjQ4ZqH0_ECFQAAAAAdAAAAABAD',
  password_confirmation: 'adminpassword',
  role: admin_role
)

clerk_user = User.create(
  name: 'Clerk User',
  email: 'clerk@example.com',
  password: 'clerkpassword',
  phone_number: '1234512890',
  user_image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F717768062733698%2F&psig=AOvVaw0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3&ust=1625928760008000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjQ4ZqH0_ECFQAAAAAdAAAAABAD',
  password_confirmation: 'clerkpassword',
  role: clerk_role
)
Item.create(
  name: "item 1",
  quantity: 10,
  destroyed_items: 0,
  status_of_item: "Available",
  buying_price: 100,
  selling_price: 200,
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F717768062733698%2F&psig=AOvVaw0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3&ust=1625928760008000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjQ4ZqH0_ECFQAAAAAdAAAAABAD",
  user_id: clerk_user,
  user_id: 1,
  created_at: nil,
  updated_at: nil
)

Item.create(
  name: "item 2",
  quantity: 21,
  destroyed_items: 4,
  status_of_item: "Available",
  buying_price: 400,
  selling_price: 800,
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F717768062733698%2F&psig=AOvVaw0Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3&ust=1625928760008000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjQ4ZqH0_ECFQAAAAAdAAAAABAD",
  user_id: clerk_user,
  user_id: 2,
  created_at: nil,
  updated_at: nil
)


puts 'Seed data created successfully!'


#20482738b824aedfa04d8b4c481b21fe9a64805c768445c30527e0a6fb2b6594a087d5662daa95c6a6d7f204f6e5e119fa1a4877e4cfad746876a0243d88c5c5
#2bf0bb5b3470003c1677dda9a41b42ff