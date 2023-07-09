class ProfilesController < ApplicationController
    before_action :set_profile, only: [:show, :update, :destroy]
    before_action :authorize_admin, only: [:show, :update, :destroy]
  
    # GET /profiles/:id
    def show
      render json: @profile
    end
  
    # PUT /profiles/:id
    def update
      if @profile.update(profile_params)
        render json: @profile
      else
        render json: @profile.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /profiles/:id
    def destroy
      @profile.destroy
    end
  
    private
  
    def set_profile
      @profile = Profile.find(params[:id])
    end
  
    def profile_params
      params.require(:profile).permit(:name, :email, :phone_number, :address)
    end
  
    def authorize_admin
      user_role = current_user_role()
      unless user_role == 'admin'
        render json: { error: 'Unauthorized' }, status: :unauthorized
      end
    end
  end
  
