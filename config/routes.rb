Rails.application.routes.draw do
  resources :inventories
  resources :sizes
  resources :pages
  resources :messages
  resources :admins
  resources :orders
  resources :materials
  resources :products
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
