class UserPolicy
    attr_reader :user

    def initialize(user)
        @user = user
    end

    def add_admin?
        user.can?('add_admin')
    end

    def delete_admin?
        user.can?('delete_admin')
    end

    def add_clerk?
        user.can?('add_clerk')
    end

    def delete_clerk?
        user.can?('delete_clerk')
    end
    
end
