class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :login]
    def create
        user_role = current_user
      
        case user_role
        when 'super_admin'
          create_user
        when 'admin'
          if user_params[:role] == 'clerk'
            create_user
          else
            render json: { error: "You are not authorized to create this role" }, status: :unauthorized
          end
        when 'clerk'
          render json: { error: "You are not authorized to create users" }, status: :unauthorized
        else
          render json: { error: "You are not authorized!" }, status: :unauthorized
        end
  end
      def login
        @user = User.find_by(name: params[:name])
      
        if @user && @user.authenticate(params[:password])
          token = encode_token({ user_id: @user.id })
      
          case @user.role
          when 'super_admin'
            render json: { user: UserSerializer.new(@user), jwt: token, redirect: '/admin/dashboard' }, status: :accepted
          when 'admin'
            render json: { user: UserSerializer.new(@user), jwt: token, redirect: '/admin/dashboard' }, status: :accepted
          when 'clerk'
            render json: { user: UserSerializer.new(@user), jwt: token, redirect: '/clerk/dashboard' }, status: :accepted
          else
            render json: { error: 'Invalid username or password' }, status: :unauthorized
          end
      
        else
          render json: { error: 'Invalid username or password' }, status: :unauthorized
        end
      end
      

  def send_activation_email
    user = User.find(params[:admin_id])
    if user.role == 'admin'
     send_activation_email_to_admin(user)
     render json: { message: 'Activation email sent successfully' }, status: :ok
      else
       render json: { error: 'User is not an admin' }, status: :unprocessable_entity
   end
  end
  
  private

  def create_user
    @user = User.create(user_params)
    if @user.valid?
      token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: token }, status: :created
    else
      render json: { error: 'Failed to create user', errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end 
  
  def send_activation_email_to_admin(admin)
    UserMailer.with(user: admin).account_activation.deliver_now
  end
  
   def user_params
          params.require(:user).permit(:name, :email, :password, :role)
      end

end
