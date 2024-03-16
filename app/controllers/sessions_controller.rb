class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def destroy
    session.delete(:user_id)
    head :no_content
  end

  def create
    # user = User.find_by(email: params[:email])
    if current_user = User.authenticate_by(email: params[:email], password: params[:password])
      session[:user_id] = current_user.id
      render json: current_user, status: :created
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:email, :password)
  end

end
