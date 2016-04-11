Rails.application.routes.draw do
	root  'static_pages#home'
	match '/contact',    to: 'static_pages#contact',    via: 'get'
    	match '/lifestyle',    to: 'static_pages#lifestyle',    via: 'get'
    	match '/projects',   to: 'static_pages#projects',   via: 'get'
end
