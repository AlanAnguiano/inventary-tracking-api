Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    omniauth_callbacks: 'overrides/omniauth_callbacks'
  }

  get '*path', to: 'angular#index'
end
