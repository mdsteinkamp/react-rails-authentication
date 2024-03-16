class UsersController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]

  def index
    users = User.all
    render json: users
  end

  def show
    # user = current_user
    if current_user
      render json: current_user
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def create
    @user = User.create(user_params)
    if @user.save!
      # login @user
      render json: @user, status: :ok
    end
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation)
  end

end
