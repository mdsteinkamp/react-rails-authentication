class PasswordsController < ApplicationController

  def update
    if current_user.update!(password_params)
      render json: current_user, status: :ok
    else
      render json: { errors: ["Errors"] }, status: :unauthorized
    end
  end

  private

  def password_params
    params.permit(
      :password,
      :password_confirmation,
      :password_challenge
    ).with_defaults(password_challenge: "")
  end

end
