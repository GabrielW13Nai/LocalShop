Rails.application.routes.draw doRails.application.routes.draw do

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

    # Clerk-specific routes for CRUD operations on items
    resources :items
  end
end

