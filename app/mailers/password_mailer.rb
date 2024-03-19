class PasswordMailer < ApplicationMailer

  def forgot_password_email
    # debugger
    @user = params[:user]
    mail to: params[:user].email
  end
end
