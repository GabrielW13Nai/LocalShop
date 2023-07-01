class ItemsController < ApplicationController
    def index
        items = Item.all

        render json: items
    end

    def create
        item = Item.create!(name: params[:name], destroyed_items: params[:destroyed_items],status_of_item: params[:status_of_item],buying_price: params[:buying_price],selling_price: params[:selling_price],image: params[:image],user_id: params[:user_id]
        )

        render json: item, status: :created
    end



end                   
