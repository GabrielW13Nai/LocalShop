class PermissionPolicy
    attr_reader :user
  
    def initialize(user)
      @user = user
    end
  
    def create?
      user.can?('create_permission')
    end
  
    def update?
      user.can?('update_permission')
    end
  
    def destroy?
      user.can?('destroy_permission')
    end
  end