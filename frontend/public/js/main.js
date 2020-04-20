angular.module('livbri', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'IndexController'
		});
		$routeProvider.when('/home/fotos',{
			templateUrl: 'partials/teste.html',
			controller: 'TestController'
		});
		
		$routeProvider.otherwise({redirectTo: '/home'});

	});