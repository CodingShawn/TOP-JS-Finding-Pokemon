Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'maps#index'
  get 'maps/checktogepi', to: 'maps#checktogepi'
  get 'maps/checkmagikarp', to: 'maps#checkmagikarp'
  get 'maps/checkporygon', to: 'maps#checkporygon'
end
