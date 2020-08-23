Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'degrees', to: 'fenix#degrees', as: :fenix_degrees
      get 'courses', to: 'fenix#courses', as: :fenix_courses
      get 'schedules', to: 'fenix#schedules', as: :fenix_schedules
    end
  end
end
