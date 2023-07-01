class ApplicationController < ActionController::Base

  def encode_token(payload)
    JWT.encode(payload, 'secret')
  end
  
end
