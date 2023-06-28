class RolePermissionPolicy
    attr_reader :user
  
    def initialize(user)
      @user = user
    end
  
    def create?
      user.can?('create_role_permission')
    end
  
    def update?
      user.can?('update_role_permission')
    end
  
    def destroy?
      user.can?('destroy_role_permission')
    end
  end