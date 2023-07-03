class ItemsController < ApplicationController
    before_action :set_book, only: [:show, :update, :destroy]
    before_action :authorize_user, only: [:upload]
  
    # GET /books
    def index
      page = params[:page].to_i || 1
      limit = params[:limit].to_i || 6
  
      offset = (page - 1) * limit
  
      @books = Item.offset(offset).limit(limit)
      render json: @books
    end
  
    # GET /books/:id
    def show
      render json: @book
    end
  
    # POST /books
    def create
       @item = Item.new(item_params)
      if @item.save
        render json: @item, status: :created
      else
        render json: @item.errors, status: :unprocessable_entity
      end
    end
  
    # POST /items/upload
    def upload
      @item = current_user.items.new(item_params)
      @item.image_url = params[:item][:image_url] if params[:item][:image_url]
  
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
      params.require(:item).permit(:title, :author, :description, :image_url)
    end
  
    def authorize_user
      return if logged_in?
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end
