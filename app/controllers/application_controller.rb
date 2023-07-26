class ApplicationController < ActionController::API
  require_relative '../service_items/authentication'
  before_action :authorize_request

  private

  def authorize_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header.present?

    begin
      decoded_token = AuthenticationService.decode(token)
      user_id = decoded_token[:user_id] if decoded_token.present?
      @current_user = User.find(user_id) if user_id.present?
    rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
      @current_user = nil
    end

    render json: { error: 'Access forbidden' }, status: :forbidden unless @current_user
  end

  def current_user
    @current_user
  end
  
end
