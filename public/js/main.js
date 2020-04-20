angular.module('livbri',['ngRoute'])
    .config(function($routeProvider,$locationProvider){
            // suportar html5
            $locationProvider.html5Mode(true);
            // Rotas
            $routeProvider.when('/qualquer',{
                templateUrl:'partials/home.html',
                controller:'indexController'
            });

            $routeProvider.otherwise({redirectTo: '/fotos'});
    });