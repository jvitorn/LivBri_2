angular.module('livbri', ['ngRoute','meusServicos'])
	.config(function($routeProvider, $locationProvider) {
		const routeIndex = {
			home:"/home",
			adm:'/adm'
		}

		$locationProvider.html5Mode(true);
        //rotas de usuario
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
			$routeProvider.when(routeIndex.home+'/carrinho',{
				templateUrl:'partials/carrinho.html',
				controller:'CarrinhoController'
			});
			$routeProvider.when(routeIndex.home+'/busca',{
				templateUrl: 'partials/busca.html',
				controller: 'BuscaController'
			});
			$routeProvider.when(routeIndex.home+'/busca/:categoria',{
				templateUrl:'partials/busca.html',
				controller:'BuscaCategoriaController'
			});
		//rotas de adm
		$routeProvider.when(routeIndex.adm+'/painel',{
			templateUrl:'partials/adm/painel.html',
			controller:'PainelController'
		});
		$routeProvider.when(routeIndex.adm+'/crud',{
			templateUrl:'partials/adm/crudLivros.html',
			controller:'CrudController'
		});

		$routeProvider.otherwise({redirectTo: '/home'});

	});