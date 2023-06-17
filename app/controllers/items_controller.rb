class ItemsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        items = Item.all

        render json: items
    end

    def create
        item = Item.create!(name: params[:name], destroyed_items: params[:destroyed_items],status_of_item: params[:status_of_item],buying_price: params[:buying_price],selling_price: params[:selling_price],item_admin_id: params[:item_admin_id]
        )

        render json: item, status: :created
    end



end


