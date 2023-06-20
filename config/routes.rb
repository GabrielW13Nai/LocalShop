Rails.application.routes.draw do
  resources :item_merchants
  resources :item_admins
  resources :items,only: [:index, :create]
  resources :admins
  resources :merchants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
