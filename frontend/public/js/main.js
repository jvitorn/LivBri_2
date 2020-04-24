angular.module('livbri', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		const routeIndex = {
			home:"/home"
		}

		$locationProvider.html5Mode(true);

		$routeProvider.when(routeIndex.home, {
			templateUrl: 'partials/home.html',
			controller: 'IndexController'
		});
		$routeProvider.when(routeIndex.home+'/livro',{
			templateUrl:'partials/livro.html',
			controller:'LivroController'
		});
		$routeProvider.when(routeIndex.home+'/livro/:id',{
			templateUrl:'partials/livro.html',
			controller:'LivroController'
		})
		$routeProvider.when(routeIndex.home+'/login',{
			templateUrl:'partials/login.html',
			controller:'LoginController'
		});
		$routeProvider.when(routeIndex.home+'/busca',{
			templateUrl: 'partials/busca.html',
			controller: 'BuscaController'
		});
		$routeProvider.when(routeIndex.home+'/busca/:categoria',{
			templateUrl:'partials/busca.html',
			controller:'BuscaCategoriaController'
		});
		
		$routeProvider.when('/adm/painel',{
			templateUrl:'partials/painel.html',
			controller:'PainelController'
		})

		$routeProvider.otherwise({redirectTo: '/home'});

	});