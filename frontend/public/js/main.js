angular.module('livbri', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'IndexController'
		});
		$routeProvider.when('/home/livro',{
			templateUrl:'partials/livro.html',
			controller:'LivroController'
		});
		$routeProvider.when('/home/login',{
			templateUrl:'partials/login.html',
			controller:'LoginController'
		});
		$routeProvider.when('/home/busca',{
			templateUrl: 'partials/busca.html',
			controller: 'BuscaController'
		});
		
		$routeProvider.otherwise({redirectTo: '/home'});

	});