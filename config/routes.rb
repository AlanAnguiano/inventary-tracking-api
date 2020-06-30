Rails.application.routes.draw do
  get '*path', to: 'angular#index'
end
