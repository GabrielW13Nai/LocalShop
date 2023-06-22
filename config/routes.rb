Rails.application.routes.draw do
  resources :clerks, only: [:index, :show, :create, :update, :destroy]
  resources :item_admins
  resources :items
  resources :admins, only:[:index, :show]

  resources :items,only: [:index, :create]
  resources :admins

  resources :item_merchants
  resources :item_admins
  resources :items,only: [:index, :create]
  resources :admins

  resources :merchants
  post '/login', to: 'merchants#login'
end
