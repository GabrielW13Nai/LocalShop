class UsersController < ApplicationController

  wrap_parameters format: []
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_user

  def create
    user = User.create!(params_create)
    # if user.valid?
    #   token = encode_token(user_id: user.id)
      render json: user, status: :created
    # else
    #   render json: {error: "Wrong credentials"}, status: :unprocessable_entity
    # end
  end

  def index
    user = User.all
    # token_decode
    render json: user, each_serializer: UserSerializer, status: :ok
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user, status: :ok
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    head :no_content
  end

  private

  def params_create
    params.permit(:name, :email, :password, :phone_number, :user_image, :role_id)
  end

  def render_unprocessable_user(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
