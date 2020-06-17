Rails.application.routes.draw do
  get '*path', to: 'angular#index'

  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    omniauth_callbacks: 'overrides/omniauth_callbacks'
  }
end
