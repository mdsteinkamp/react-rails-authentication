class PasswordResetController < ApplicationController
  skip_before_action :authorize
  before_action :set_user_by_token, only: [:update]

  def new
  end

  def edit
    @user = User.find(session[:user_id])
    if @user.update!(password_params)
      render json: current_user, status: :ok
    else
      render json: { errors: ["Errors"] }, status: :unauthorized
    end
  end

  def update
    # debugger
    if @user
      redirect_to "http://localhost:4000/reset_password"
      # render json: user
      session[:user_id] = @user.id
      # debugger
    else
      render json: { errors: ["Errors password token invalid or expired, please try again"] }, status: :unprocessable_entity
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

  def password_params
    params.permit(:password, :password_confirmation)
  end


end
