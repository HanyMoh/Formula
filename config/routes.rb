Rails.application.routes.draw do
  
  namespace :api, defaults: { format: 'json' } do
    resources :categories
    resources :articles
  end

  root to: "home#index"
  match '*path', to: 'home#index', via: :all
end
