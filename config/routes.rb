# == Route Map
#
#          Prefix Verb     URI Pattern                 Controller#Action
#            chat GET      /chat(.:format)             chat#index
#            root GET      /                           welcome#index
#           users GET      /users(.:format)            users#index
#            user GET      /users/:id(.:format)        users#show
#           games GET      /games(.:format)            games#index
#            game GET      /games/:id(.:format)        games#show
#   notifications GET      /notifications(.:format)    notifications#index
#                 POST     /notifications(.:format)    notifications#create
#    competitions GET      /competitions(.:format)     competitions#index
#                 POST     /competitions(.:format)     competitions#create
# new_competition GET      /competitions/new(.:format) competitions#new
#     competition GET      /competitions/:id(.:format) competitions#show
#       websocket GET|POST /websocket(.:format)        websocket_rails
#

Rails.application.routes.draw do
  get 'groups/new'

  get 'groups/show'

  get 'groups/create'

  get 'chat', to: 'chat#index'

  root 'welcome#index'

  resources :users, only: [:index, :show]
  resources :games, only: [:index, :show]
  resources :notifications, only: [:index, :create]
  resources :competitions, only: [:index, :create, :show, :new]
  resources :groups, only: [:new, :show, :create]
end
