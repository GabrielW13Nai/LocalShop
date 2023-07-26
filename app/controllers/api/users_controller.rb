class Api::UsersController < ApplicationController
  skip_before_action :authorize_request, only: [:create, :login, :superadmin_signup]

  def index
    users = User.all
    render json: users, each_serializer: UserSerializer
  end

  def show
    user = User.find(params[:id])
    render json: user, serializer: UserSerializer
  end

  def superadmin_signup
    superadmin_role = Role.find_or_create_by(name: 'superadmin'.downcase)

    user = User.new(superadmin_params)
    user.role = superadmin_role

    if user.save
      render json: { message: 'Superadmin user created successfully' }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def create
    user = User.new(user_params)

    if user_params[:password] != user_params[:password_confirmation]
      render json: { error: "Password and password confirmation do not match" }, status: :unprocessable_entity
      return
    end

    case user_params[:role]
    when 'clerk'
      user.role = Role.find_or_create_by(name: 'clerk'.downcase)
    when 'admin'
      user.role = Role.find_or_create_by(name: 'admin'.downcase)
    when 'superadmin'
      user.role = Role.find_or_create_by(name: 'superadmin'.downcase)
    else
      render json: { error: 'Invalid user role' }, status: :unprocessable_entity
      return
    end

    if user.save
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end  

  def login
    login_params = params.permit(:email, :password)
    Rails.logger.info("Login request received. Params: #{login_params.inspect}")

    user = User.find_by(email: login_params[:email])

    if user&.authenticate(login_params[:password])
      token = AuthenticationService.encode({ user_id: user.id })
      render json: { token: token }, status: :ok
     else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def user_params 
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :role)
  end

  def superadmin_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :role) 
  end
end
