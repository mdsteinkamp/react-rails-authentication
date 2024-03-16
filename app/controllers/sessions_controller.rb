class SessionsController < ApplicationController

  def destroy
    session.delete(:user_id)
    head :no_content
  end


end
