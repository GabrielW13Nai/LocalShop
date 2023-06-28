class ApplicationController < ActionController::Base

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def access_denied invalid
      render json: {errors: "Access denied"}, status: :forbidden
    end

    def token_verification
      if !request_headers['Authorization']
        render json: {error: "Invalid token"}
      else
        render json: {error: "Invalid token"} unless token_decode
      end
    end

    def token_decode
      token = request.headers['Authorization'].split(" ")[1]
      begin
        JWT:decode(token, Rails.configuration.jwt[:secret])[0]
      rescue
        JWT.DecodeError
      end
    end

    def permit policy, resource
      permissions = token_decode['permissions']
      permissions.include?('*') || permissions.include?(`#{policy}_#{resource}`)
    end

    def allowed
      policy = case request.method
      when "POST"
        "add"
      when "PATCH" || "PUT"
        "update"
      when "DESTROY"
        "delete"
      else
        "view"
      end

      path = request.path.split("/")
      resource = path[1]
      paramsPath = path[2]

      raise ActionController::RoutingError.new("Forbidden") unless allowed(policy, policy && paramsPath == "view"? resource.singularize : resource)
    end

    private

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end



end
