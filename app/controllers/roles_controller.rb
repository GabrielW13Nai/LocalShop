class RolesController < ApplicationController

    def index
        role = Role.all
        render json: role, status: :ok, serializer: RoleSerializer
    end

    def show
        role = Role.find_by(id: params[:id])
        render json: role, status: :ok
    end

    private
    def role_params
        params.permit(:name, :description)
    end
end
