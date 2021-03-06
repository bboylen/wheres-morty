Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do 
    namespace :v1 do
      get 'characters/index' => 'characters#index'
      patch 'characters/:id' => 'characters#update'
    end
  end
end
