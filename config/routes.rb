# == Route Map
#
#        Prefix Verb     URI Pattern                 Controller#Action
#          chat GET      /chat(.:format)             chat#index
#          root GET      /                           welcome#index
#         users GET      /users(.:format)            users#index
#          user GET      /users/:id(.:format)        users#show
#         games GET      /games(.:format)            games#index
# notifications GET      /notifications(.:format)    notifications#index
#               POST     /notifications(.:format)    notifications#create
#  competitions GET      /competitions(.:format)     competitions#index
#               POST     /competitions(.:format)     competitions#create
#   competition GET      /competitions/:id(.:format) competitions#show
#     websocket GET|POST /websocket(.:format)        websocket_rails
#

Rails.application.routes.draw do
  get 'chat', to: 'chat#index'

  root 'welcome#index'

  resources :users, only: [:index, :show]
  resources :games, only: [:index]
  resources :notifications, only: [:index, :create]
  resources :competitions, only: [:index, :create, :show, :new]
end
