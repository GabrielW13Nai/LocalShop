class ItemsController < ApplicationController
    before_action :set_item, only: [:show, :update, :destroy]
    before_action :authorize_clerk, only: [:create, :update, :destroy]
  
    # GET /items
    def index
      items = Item.all
      render json: items
    end
  
    # GET /items/:id
    def show
      render json: @item
    end
  
    # POST /items
    def create
      @item = Item.new(item_params)
  
      if @item.save
        render json: @item, status: :created
      else
        render json: @item.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /items/:id
    def update
      if @item.update(item_params)
        render json: @item
      else
        render json: @item.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /items/:id
    def destroy
      @item.destroy
    end
  
    private
  
    def set_item
      @item = Item.find(params[:id])
    end
  
    def item_params
      params.require(:item).permit(:name, :quantity, :destroyed_items, :status_of_item, :buying_price, :selling_price, :user_id)
    end
  
    def authorize_clerk
      user_role = current_user_role()
      unless user_role == 'clerk'
        render json: { error: 'Unauthorized' }, status: :unauthorized
      end
    end
end
  