class PasswordResetController < ApplicationController
  skip_before_action :authorize
  before_action :set_user_by_token, only: [:edit, :update]

  def new
  end

  def edit
  end

  def update
    debugger
    if @user
      render json: @user, status: :ok
    else
      render json: { errors: ["Errors"] }, status: :unprocessable_entity
    end
  end

  def create
    if (user = User.find_by(email: params[:email]))
      PasswordMailer.with(
        user: user,
        token: user.generate_token_for(:password_reset)
      ).forgot_password_email.deliver_later
      # debugger
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
