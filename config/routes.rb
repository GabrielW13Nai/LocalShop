Rails.application.routes.draw do
  resources :clerks, only: [:index, :show, :create, :update, :destroy]
  resources :item_admins
  resources :items
  resources :admins, only:[:index, :show]
  resources :merchants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
