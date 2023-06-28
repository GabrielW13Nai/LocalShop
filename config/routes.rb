Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :permissions, only: [:index, :show]
  resources :roles, only: [:index, :show, :create, :update, :destroy]
  resources :role_permissions
  resources :items,only: [:index, :create]

  post '/clerkadd', to: "users#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
