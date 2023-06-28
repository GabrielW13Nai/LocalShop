class UsersController < ApplicationController
  def login
    user = User.find_by(email: params_login[:email])
    if user&.authenticate(params_login[:password])
      # token_expiry = params_login[:remember_me]=="true"? Time.now + (60*60*24*7): Time.now + (60*60)
      payload = {
        user_id: user.id
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        permissions = user.permissions.map{ |permission| permission.alias  }
      }
      token = JWT: encode(payload, Rails.configuration.jwt["secret"])

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
      render json: {token: token}
    else
      render json {error: "Invalid credentials entered"}
    end
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
