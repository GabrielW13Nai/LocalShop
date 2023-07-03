class ApplicationController < ActionController::API
  before_action :authorized, only: [:index, :show, :create, :update, :destroy]

  def encode_token(payload)
    JWT.encode(payload, 'secret') 
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'secret', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  end

  def current_user
    return @current_user if @current_user
  
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @current_user = User.find_by(id: user_id)
    end
  end

  def authorized_role(role)
    render json: { error: 'Unauthorized' }, status: :unauthorized unless current_user && current_user.role == role
  end
  

  def authorized
    render json: { error: 'Unauthorized' }, status: :unauthorized unless current_user
  end

  def logged_in?
    !!current_user
  end

end
