Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/login", to: "sessions#create"
  delete "/logout", to: "sessionsgit#destroy"


  resources :sessions
  # resource :signup
  resources :password_reset
  resources :password
  resources :users
end
