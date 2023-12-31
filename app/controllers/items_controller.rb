class ItemsController < ApplicationController
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_user


    def index
      item = Item.all
      # token_decode
      render json: item, each_serializer: ItemSerializer, status: :ok
    end

    def create
      item = Item.create!(item_params)
    # if user.valid?
    #   token = encode_token(user_id: user.id)
      render json: item, status: :created
    # else
    #   render json: {error: "Wrong credentials"}, status: :unprocessable_entity
    # end
    end

    def show
      user = Item.find_by(id: params[:id])
      render json: item, status: :ok
    end


    def update
      item = Item.find_by(id: params[:id])
      if item
        item.update(params.permit(item_params))
        render json: item, status: :accepted
      else
        render json: {error: "Unable to update items"}, status: :unprocessable_entity
      end
    end

    private

    def item_params
      params.permit(:name, :quantity, :destroyed_items, :status_of_item, :buying_price, :selling_price, :image, :user_id)
    end

    def render_unprocessable_user(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
