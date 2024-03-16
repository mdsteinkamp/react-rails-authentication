Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"


  resources :sessions
  # resource :signup
  resources :password_reset
  resources :password
  resources :users
end
