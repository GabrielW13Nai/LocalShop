class RolePermissionsController < ApplicationController
    def index
        render json: Role.all, each_serializer: RoleSerializer
    end

    def show 
        role = Role.find(params[:id])
    end

    def create
        role = Role.create!(new_params)
        role.save!(new_params)
        render json: role, serializer:RoleSerializer
    end

    private
    def new_params
        params.permit(:name)
    end


end
