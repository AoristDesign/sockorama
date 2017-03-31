Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope 'api' do
    # resources :inventories
    # resources :admins
    resources :sizes, only: [:index, :show]
    resources :pages, only: [:index, :show]
    resources :messages, only: [:new, :create, :show]
    resources :materials, only: [:index, :show]
    resources :products, only: [:index, :show]
    resources :users, except: [:index], shallow: true do
      resources :orders
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
