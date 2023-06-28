class UsersController < ApplicationController

  before_action :authorize_create_admin, only: [:add_admin]
  before_action :authorize_update_admin, only: [:update_admin]
  before_action :authorize_delete_admin, only: [:delete_admin]
  before_action :authorize_create_clerk, only: [:add_clerk]
  before_action :authorize_update_clerk, only: [:update_clerk]
  before_action :authorize_delete_clerk, only: [:delete_clerk]
  before_action :authorize_create_item, only: [:add_item]
  before_action :authorize_delete_item, only: [:delete_item]


  def login
    user = User.find_by(email: params_login[:email])
    if user&.authenticate(params_login[:password])
      # token_expiry = params_login[:remember_me]=="true"? Time.now + (60*60*24*7): Time.now + (60*60)
      payload = {
        user_id: user.id,
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        permissions = user.permissions.map{ |permission| permission.alias }
      }
      token = JWT.encode(payload, Rails.configuration.jwt["secret"])

      render json: {token: token}
    else
      render json: {error: "Invalid credentials entered"}
    end
  end

  def add_admin
    if user_authorized?('create_role')
      admin = User.new(user_params)
      admin.role = Role.find_by(name: 'admin')

      if admin.save
        render json: { message: 'Admin added successfully' }, status: :created
      else
        render json: { error: 'Failed to add admin' }, status: :unprocessable_entity
      end
    else
      unauthorized_access_message
    end
  end

  def update_admin
    if user_authorized?('update_user')
      admin = User.find(params[:id])

      if admin.update(user_params)
        render json: { message: 'Admin updated successfully' }, status: :ok
      else
        render json: { error: 'Failed to update admin' }, status: :unprocessable_entity
      end
    else
      unauthorized_access_message
    end
  end

  def delete_admin
    if user_authorized?('delete_user')
      admin = User.find(params[:id])

      if admin.destroy
        render json: { message: 'Admin deleted successfully' }, status: :ok
      else
        render json: { error: 'Failed to delete admin' }, status: :unprocessable_entity
      end
    else
      unauthorized_access_message
    end
  end

  def add_clerk
    if user_authorized?('create_user') && user_authorized?('create_role_permission')
      clerk = User.new(user_params)
      clerk.role = Role.find_by(name: 'clerk')

      if clerk.save
        render json: { message: 'Clerk added successfully' }, status: :created
      else
        render json: { error: 'Failed to add clerk' }, status: :unprocessable_entity
      end
    else
      unauthorized_access_message
    end
  end

  def update_clerk
    if user_authorized?('update_user')
      clerk = User.find(params[:id])

      if clerk.update(user_params)
        render json: { message: 'Clerk updated successfully' }, status: :ok
      else
        render json: { error: 'Failed to update clerk' }, status: :unprocessable_entity
      end
    else
      unauthorized_access_message
    end
  end

  def delete_clerk
    if user_authorized?('delete_user')
      clerk = User.find(params[:id])

      if clerk.destroy
        render json: { message: 'Clerk deleted successfully' }, status: :ok
      else
        render json: { error: 'Failed to delete clerk' }, status: :unprocessable_entity
      end
    else
      unauthorized_access_message
    end
  end

  def add_item
    if user_authorized?('create_item')
      item = Item.new(item_params)

      if item.save
        render json: { message: 'Item added successfully' }, status: :created
      else
        render json: { error: 'Failed to add item' }, status: :unprocessable_entity
      end
    else
      unauthorized_access_message
    end
  end

  def delete_item
    if user_authorized?('delete_item')
      item = Item.find(params[:id])

      if item.destroy
        render json: { message: 'Item deleted successfully' }, status: :ok
      else
        render json: { error: 'Failed to delete item' }, status: :unprocessable_entity
      end
    else
      unauthorized_access_message
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

  def item_params
    params.require(:item).permit(:name, :description)
  end

  def user_authorized?(permission)
    case permission
    when 'create_role'
      role_policy = RolePolicy.new(current_user)
      role_policy.create?
    when 'update_user'
      user_policy = UserPolicy.new(current_user)
      user_policy.update?
    when 'delete_user'
      user_policy = UserPolicy.new(current_user)
      user_policy.destroy?
    when 'create_permission'
      permission_policy = PermissionPolicy.new(current_user)
      permission_policy.create?
    when 'create_role_permission'
      role_permission_policy = RolePermissionPolicy.new(current_user)
      role_permission_policy.create?
    when 'update_item'
      item_policy = ItemPolicy.new(current_user)
      item_policy.update?
    when 'create_item'
      item_policy = ItemPolicy.new(current_user)
      item_policy.create?
    when 'delete_item'
      item_policy = ItemPolicy.new(current_user)
      item_policy.destroy?
    else
      false
    end
  end

  def authorize_create_admin
    unless user_authorized?('create_role')
      unauthorized_access_message
    end
  end

  def authorize_update_admin
    unless user_authorized?('update_user')
      unauthorized_access_message
    end
  end

  def authorize_delete_admin
    unless user_authorized?('delete_user')
      unauthorized_access_message
    end
  end

  def authorize_create_clerk
    unless user_authorized?('create_user') && user_authorized?('create_role_permission')
      unauthorized_access_message
    end
  end

  def authorize_update_clerk
    unless user_authorized?('update_user')
      unauthorized_access_message
    end
  end

  def authorize_delete_clerk
    unless user_authorized?('delete_user')
      unauthorized_access_message
    end
  end

  def authorize_create_item
    unless user_authorized?('create_item')
      unauthorized_access_message
    end
  end

  def authorize_delete_item
    unless user_authorized?('delete_item')
      unauthorized_access_message
    end
  end
  
  def unauthorized_access_message
    render json: { error: 'You are not authorized to perform this action' }, status: :unauthorized
  end
end


