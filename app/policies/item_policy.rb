class ItemPolicy
    attr_reader :user

    def initialize(user)
        @user = user
    end

    def add_item?
        user.can?('add_item')
    end

    def update_item?
        user.can?('update_item')
    end

    def delete_item?
        user.can('delete_item')
    end
end