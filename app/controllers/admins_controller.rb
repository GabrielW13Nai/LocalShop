class AdminsController < ApplicationController
# skip_before_action :verify_authenticity_token
rescue_from ActiveRecord::RecordInvalid, with: :clerk_record_invalid
  wrap_parameters format: []

  def index
    @admin = Admin.all
    render json: @admin
  end

  def show
    @admin = Admin.find_by(id: params[:id])
    render json: @admin
  end

  def create
    @admin = Admin.create!(params_allowed)
    render json: @admin, status: :created
  end

  def destroy
    @admin = Admin.find_by(id: params[:id])
    @admin.destroy
    head :no_content
  end


  private

  def params_allowed
    params.permit(:name, :admin_id)
  end


  def admin_record_invalid invalid
    render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
