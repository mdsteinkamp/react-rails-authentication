class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize


  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end
  
  private

  def current_user
    Current.user ||= authenticate_user_from_session
  end
  # helper_method :current_user

  def authenticate_user_from_session
    User.find_by(session[:user_id])
  end

  def user_signed_in?
    current_user.present?
  end
  # helper_method :user_signed_in?

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not Authorized"] }, status: :unauthorized unless session.include?(:user_id)
  end

  def login(user)
    Current.user = user
    reset_session
    session[:user_id] = user.id
  end
    
  def logout(user)
    Current.user = nil
    reset_session
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
