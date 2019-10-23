Rails.application.routes.draw do
  
  namespace :api, defaults: { format: 'json' } do
    resources :categories, only: :index
    resources :articles, only: :index
  end

  root to: "home#index"
  match '*path', to: 'home#index', via: :all
end
