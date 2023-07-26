class Api::AdminsController < Api::ApiController
  before_action :authorize_request
  before_action :authorize_superadmin, only: [:create]

  def create
    admin = User.new(admin_params)
    admin.role = Role.find_by(name: 'admin'.downcase) 
    if admin.save
      render json: admin, status: :created
    else
      render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def admin_params
    params.require(:admin).permit(:name, :email, :password, :password_confirmation, :role)
  end
  
  def authorize_superadmin
    user_role = @current_user&.role&.name&.downcase
    puts "User Role: #{user_role}"

    unless user_role == 'superadmin'
      puts "Unauthorized: #{user_role}"
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end