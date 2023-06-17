class ApplicationController < ActionController::Base

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    private 
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
