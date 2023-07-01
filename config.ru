# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

run Rails.application
Rails.application.load_server

namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users
    end
  end
  
