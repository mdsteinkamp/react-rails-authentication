class PasswordResetController < ApplicationController
  skip_before_action :authorize
  before_action :set_user_by_token, only: [:edit, :update]

  def new
  end

  def edit
  end

  def update
  end

  def create
    if (user = User.find_by(email: params[:email]))
      # debugger
      PasswordMailer.with(
        user: user,
        token: user.generate_token_for(:password_reset)
      ).forgot_password_email.deliver_later
    render json: { alert: "If this user exists, we have sent you a password reset email." }
    else
      render json: { alert: "If this user exists, we have sent you a password reset email." }
    end
  end

  private

  def set_user_by_token
    @user = User.find_by_token_for(:password_reset, params[:token])
  end


end
