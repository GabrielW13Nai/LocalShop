Rails.application.routes.draw do
  resources :users
  resources :permissions
  resources :roles
  resources :items
  resources :role_permissions
  resources :clerks, only: [:index, :show, :create, :update, :destroy]
  # resources :item_admins
  resources :admins, only:[:index, :show]
  resources :items,only: [:index, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :item_merchants
  resources :item_admins
  resources :items,only: [:index, :create]
  resources :admins

  resources :merchants
  post '/login', to: 'merchants#login'
end
