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
#       new_group GET      /groups/new(.:format)       groups#new
#           group GET      /groups/:id(.:format)       groups#show
#    create_group POST     /groups/new(.:format)       groups#create
#       websocket GET|POST /websocket(.:format)        websocket_rails
#

Rails.application.routes.draw do
  get 'chat', to: 'chat#index'

  root 'welcome#index'

  resources :users, only: [:index, :show]
  resources :games, only: [:index, :show]
  resources :notifications, only: [:index, :create]
  resources :competitions, only: [:index, :create, :show, :new]
  resources :groups, only: [:new, :show]

  match '/groups/new', to: 'groups#create', via: :post, as: :create_group
end
