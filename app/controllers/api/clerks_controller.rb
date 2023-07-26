class Api::ClerksController < Api::ApiController
  before_action :authorize_request
  before_action :authorize_admin, only: [:create]
  
  def create
   user = User.new(user_params)

   if user_params[:password] != user_params[:password_confirmation]
    render json: { error: "Password and password confirmation do not match" }, status: :unprocessable_entity
    return
   end

   unless params[:user].present?
    render json: { error: 'Required parameters are missing' }, status: :bad_request
    return
   end

   user = User.new(user_params)

   clerk_role = Role.find_by(name: 'clerk'.downcase)

   if clerk_role.nil?
    render json: { error: 'Role "clerk" not found. Please make sure the role exists in the database.' }, status: :unprocessable_entity
    return
   end

   user.role = clerk_role

   if user.save
    render json: user, serializer: UserSerializer, message: 'User created successfully', status: :created
   lse
    render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
   end
 end

  private

  def clerk_params
    params.require(:clerk).permit(:name, :email, :password, :password_confirmation, :role)
  end

  def user_params 
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :role)
  end
end
