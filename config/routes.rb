Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  patch "/password", to: "passwords#update"
  post "/reset_password", to: "password_reset#update"


  resources :sessions
  # resource :signup
  resources :password_reset
  # resources :password
  resources :users
end
