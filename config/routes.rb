Rails.application.routes.draw do
<<<<<<< HEAD
  resources :clerks, only: [:index, :show, :create, :update, :destroy]
  resources :item_admins
<<<<<<< HEAD
  resources :items
  resources :admins, only:[:index, :show]
=======
  resources :items,only: [:index, :create]
  resources :admins
>>>>>>> 40f7d7607b1dd439323445adc61034856ee234f5
=======
  resources :item_merchants
  resources :item_admins
  resources :items,only: [:index, :create]
  resources :admins
>>>>>>> 543dd0d2252636f68b8f3f185a0173049329b0fe
  resources :merchants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
