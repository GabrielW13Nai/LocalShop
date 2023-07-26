class Api::ItemsController < ApplicationController
  before_action :authorize_request
  before_action :authorize_user, only: [:create, :update, :destroy]

  def index
    @items = Item.includes(:user).all
    render json: @items, each_serializer: ItemWithUserSerializer
  end

  def show
    @item = Item.find(params[:id])
    render json: @item, each_serializer: ItemWithUserSerializer
  end

  def create
    item = Item.new(item_params)
    item.user = current_user

    if item.save
      render json: item, serializer: ItemSerializer, message: 'Item created successfully', status: :created
    else
      render json: { errors: item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @item = Item.find(params[:id])

    if @item.update(item_params)
      render json: @item, serializer: ItemSerializer, message: 'Item updated successfully'
    else
      render json: { errors: @item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy 
    @item = Item.find(params[:id])
    @item.destroy
    render json: { message: 'Item deleted successfully' }
  end


  private

  def item_params
    params.require(:item).permit(:name, :quantity, :destroyed_items, :status_of_item, :buying_price, :selling_price, :image)
  end

  def authorize_user
    unless @current_user && @current_user.role.present?
      render json: { error: 'Access forbidden. You need to be a clerk to perform this action.' }, status: :forbidden
    end
  end
end
