Rails.application.routes.draw do
  root "static_pages#home"
  get "/about" => "static_pages#about"
  get "/login" => "static_pages#login"
  get "/signup" => "static_pages#signup"
  get "/tasks" => "static_pages#tasks"

  namespace :api do

  end

  match "*path", to: "static_pages#home", via: :all
end
