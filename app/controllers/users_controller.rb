class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :login]

    def create
        user_role = current_user_role
        if user_role != 'super_admin'
            render json: { error: "You are not authorized!"}
        else
            @user = User.create(user_params)
            if @user.valid?
            token = encode_token({user_id: @user.id})
            render json: { user: UserSerializer.new(@user), jwt: token }, status: :created
            else
                render json: { error: 'Failed to create user', errors: @user.errors.full_messages }, status: :unprocessable_entity
            end
        end
    end


    def login 
        @user = User.find_by(name: params[:name])

        if @user && @user.authenticate(params[:password])
        token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
        else
        render json: { error: 'Invalid username or password' }, status: :unauthorized
        end
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password, :role)
end

end
