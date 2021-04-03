Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do 
    namespace :v1 do
      get 'characters/index'
    end
  end
end
