Rails.application.routes.draw do
  resources :profiles
  resources :users, only: [:create]
  post "/login", to: "users#login"
  
  
end
