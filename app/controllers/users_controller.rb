class UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            token = encode_token({user_id: @user.id})
            render json: {user: @user, token: token}, status: :ok
        else
            render json: { error: 'Failed to create user', errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def login 
        @user = User.find_by(name: user_params[:name])
        
        if @user&.authenticate(user_params[:password])
            token = encode_token({user_id: @user.id})
            render json: {user: @user, token: token}, status: :ok
        else
            render json: {error: "invalid name or password or email"}, status: :unprocessable_entity
        end
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation, :role)
end

end
