Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  resources :sessions
  # resource :signup
  resources :password_reset
  resources :password
  resources :users
end
