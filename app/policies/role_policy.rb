class RolePolicy
    attr_reader :user

    def initialize(user)
        @user = user
    end

    def create_admin?
        user.can?('create_admin_role')
    end

    def update_admin?
        user.can?('update_admin_role')
    end

    def destroy_admin?
        user.can?('destroy_admin_role')
    end
    def create_clerk?
        user.can?('create_clerk_role')
    end

    def update_clerk?
        user.can?('update_clerk_role')
    end

    def destroy_clerk?
        user.can?('destroy_clerk_role')
    end
end