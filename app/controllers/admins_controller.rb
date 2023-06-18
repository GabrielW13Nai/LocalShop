class AdminsController < ApplicationController

  def index
    clerk = Admin.all
    render json: clerk
  end

  def show
    clerk = Admin.find_by(id: params[:id])
    render json: clerk
  end





end
