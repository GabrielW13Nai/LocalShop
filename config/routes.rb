Rails.application.routes.draw do
  namespace :api do
    # creating Admins
    post 'admins', to: 'admins#create'

    # creating Clerks
    post 'clerks', to: 'clerks#create'
    resources :users, except: [:new, :edit] do
      collection do
        post 'login', to: 'users#login'
        post 'superadmin_signup', to: 'users#superadmin_signup'
      end
    end
    resources :items, except: [:new, :edit]
  end
end

