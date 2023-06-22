class MerchantsController < ApplicationController
    # skip_before_action :verify_authenticity_token
rescue_from ActiveRecord::RecordInvalid, with: :clerk_record_invalid
wrap_parameters format: []

def index
  @merchant = Merchant.all
  render json: @merchant
end

def show
  @merchant = Merchant.find_by(id: params[:id])
  render json: @merchant
end

def create
  @merchant = Clerk.create!(params_allowed)
  render json: @merchant, status: :created
end

def destroy
  @merchant = Merchant.find_by(id: params[:id])
  @merchant.destroy
  head :no_content
end


private

def params_allowed
  params.permit(:name)
end
# def find_by_clerk
#   Merchant.find_by(params_allowed)
# end

def merchant_record_invalid invalid
  render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
end
end
