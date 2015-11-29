Airbrake.configure do |config|
  config.api_key = 'c7cc1e74bbf29c20faef47b9ad731555'
  config.host    = 'errbit.awesomepeople.tv'
  config.port    = 80
  config.secure  = config.port == 443
end
