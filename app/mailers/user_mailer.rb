class UserMailer < ApplicationMailer
 def account_activation
  @user = params[:user]
  mail(to: @user.email, subject: 'Account Activation')
 end
end
