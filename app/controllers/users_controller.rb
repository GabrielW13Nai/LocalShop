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
  def params_update
    params.permit(:id, :name, :email, :password, :phone_number, :user_image, :role_id, :role)
  end

  def render_unprocessable_user(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
