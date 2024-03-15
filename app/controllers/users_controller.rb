class UsersController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]

  def index
  end

  def show
  end

  def create
    @user = User.create(user_params)
    if @user.save!
      login @user
      render json: @user, status: :ok
    end
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation)
  end

end
