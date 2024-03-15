Rails.application.routes.draw do
  get '/hello', to: "application#hello_world"

  post "/signup", to: "users#create"

  resource :sessions
  # resource :signup
  resource :password_reset
  resource :password
  resource :users
end
