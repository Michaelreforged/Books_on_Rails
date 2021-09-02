Rails.application.routes.draw do
  # resources :books
  root 'books#app'
  get '/books', to:'books#index'
  post '/books', to:'books#create'
  put '/books/:id', to:'books#update'
  patch '/books/:id', to:'books#update'
  delete '/books/:id', to:'books#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
