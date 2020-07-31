module Overrides
  class OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
    protected
    # break out provider attribute assignment for easy method extension
    def assign_provider_attrs(user, auth_hash)
      if auth_hash['provider'] == 'google_oauth2'
        user.assign_attributes(
          name: auth_hash['info']['name'],
          email: auth_hash['info']['email'],
          image: auth_hash['info']['image']
        )
      else
        super
      end
    end
  end
end
