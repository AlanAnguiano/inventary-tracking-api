Rails.application.config.middleware.use OmniAuth::Builder do
  provider(
    :google_oauth2,
    Rails.application.credentials.send(Rails.env)[:GOOGLE_KEY],
    Rails.application.credentials.send(Rails.env)[:GOOGLE_SECRET],
    hd: 'magmalabs.io'
  )
end
