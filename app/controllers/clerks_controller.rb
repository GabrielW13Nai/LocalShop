class ClerksController < ApplicationController
# skip_before_action :verify_authenticity_token
rescue_from ActiveRecord::RecordInvalid, with: :clerk_record_invalid
  wrap_parameters format: []

  def index
    clerk = Clerk.all
    render json: clerk
  end

  def show
    clerk = Clerk.find_by(id: params[:id])
    render json: clerk
  end

  def create
    clerk = Clerk.create!(params_allowed)
    render json: clerk, status: :created
  end

  def destroy
    clerk = Clerk.find_by(id: params[:id])
    clerk.destroy
    head :no_content
  end


  private

  def params_allowed
    params.permit(:name, :admin_id)
  end
  # def find_by_clerk
  #   Clerk.find_by(params_allowed)
  # end

  def clerk_record_invalid invalid
    render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
