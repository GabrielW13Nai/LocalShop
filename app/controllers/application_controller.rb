class ApplicationController < ActionController::Base
 #before_action :token_verification
  #before_action :allowed

  # before_action :token_verification
  # before_action :allowed

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    #rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def access_denied invalid
      render json: {errors: "Access denied"}, status: :forbidden
    end

    def token_verification
      if !request.headers['Authorization']
        render json: {error: "Invalid token"}
      else
        render json: {error: "Invalid token"} unless token_decode
      end
    end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'secret', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end

    def permit policy, resource
      permissions = token_decode['permissions']
      permissions.include?('*') || permissions.include?(`#{policy}_#{resource}`)
    end



      path = request.path.split("/")
      resource = path[1]
      paramsPath = path[2]

      raise ActionController::RoutingError.new("Forbidden") unless allowed(policy,  paramsPath && policy == "view"? resource.singliarize : resource)
  def current_user
    return @current_user if @current_user

    if decoded_token
      user_id = decoded_token[0]['user_id']
      @current_user = User.find_by(id: user_id)
    end

    @current_user
  end

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end




end
