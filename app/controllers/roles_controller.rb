class RolesController < ApplicationController

    def index
        role = Roles.all
        render json: role, status: :ok
    end

    def show
        role = Role.find_by(id: params[:id])
        render json: role, status: :ok
    end

    def create
        role = Role.create(role_params)
        render json: role, status: :created
    end

    private
    def role_params
        params.permit(:name, :description)
    end
end
