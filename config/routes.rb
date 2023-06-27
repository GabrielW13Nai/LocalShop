Rails.application.routes.draw do

  resources :users, only: [:create]

  resources :items, except: [:new, :edit] do
    collection do
      post :upload
    end
  end

  resources :profiles, except: [:new, :edit]
  # Authentication routes
  post '/login', to: 'users#login'
  post '/signup', to: 'users#create'

  # Profile routes
  resources :profiles, only: [:show, :update]

  # Admin routes
  namespace :admin do
    # Dashboard route
    get '/dashboard', to: 'dashboard#index'

    # Admin-specific routes
    resources :admins, only: [:index, :show, :create, :update, :destroy]
    resources :clerks, only: [:index, :show, :create, :update, :destroy]
  end

  #send email activation to admin
  post '/users/send_activation_email', to: 'users#send_activation_email'

  # Clerk routes
  namespace :clerk do
    # Dashboard route
    get '/dashboard', to: 'dashboard#index'
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :permissions, only: [:index, :show]
  resources :roles, only: [:index, :show, :create, :update, :destroy]
  resources :role_permissions
  resources :items,only: [:index, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Clerk-specific routes for CRUD operations on items
    resources :items
  end
end

