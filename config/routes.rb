Rails.application.routes.draw do
  resources :users, only: [:create]
  post "/login", to: "users#login"
  
  resources :profiles
  resources :books, only: [:index, :show, :create, :update, :destroy] do
    post 'upload', on: :collection
  end

  get '/profiles/:id', to: 'profiles#show'
  patch '/profiles/:id', to: 'profiles#update'
  get '/profiles/:id/edit', to: 'profiles#edit', as: 'edit_profile'

  
end
