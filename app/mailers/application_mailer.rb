class ApplicationMailer < ActionMailer::Base
  default from: "from@example.com"
  layout "mailer"
  
  class UserMailer < ApplicationMailer
    def account_activation
      @user = params[:user]
      mail(to: @user.email, subject: 'Account Activation')
    end
  end
end
