class Api::ApiController < ApplicationController
  before_action :authorize_request
  attr_reader :current_user

  private

  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header

    begin
      decoded_token = AuthenticationService.decode(header)
      user_id = decoded_token[:user_id]

      @current_user = User.find_by(id: user_id)

      @current_user = nil if @current_user && @current_user.role.blank?
     rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError, ActiveRecord::RecordNotFound
      @current_user = nil
     end

     render json: { error: 'Unauthorized' }, status: :unauthorized unless @current_user
  end

  def authorize_admin
    user_role = @current_user&.role&.name&.downcase
    puts "User Role: #{user_role}"

    unless user_role == 'admin'
      puts "Unauthorized: #{user_role}"
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end
