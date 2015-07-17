# == Route Map
#
#             Prefix Verb     URI Pattern             Controller#Action
#               root GET      /                       welcome#index
#              users GET      /users(.:format)        users#index
#               user GET      /users/:id(.:format)    users#show
#              games GET      /games(.:format)        games#index
# notification_index GET      /notification(.:format) notification#index
#                    POST     /notification(.:format) notification#create
#          websocket GET|POST /websocket(.:format)    websocket_rails
#

Rails.application.routes.draw do
  root 'welcome#index'

  resources :users, only: [:index, :show]
  resources :games, only: [:index]
  resources :notifications, only: [:index, :create]
  resources :competitions, only: [:index, :create, :show]
end
