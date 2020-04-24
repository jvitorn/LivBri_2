angular.module('livbri').run(function($rootScope,$http){
    $rootScope.pesquisar = '';

    $rootScope.categorias = [];
        $http.get("http://localhost:3333/categoria")
         .then(function(response) {
           $rootScope.categorias = response.data;
       }).catch(function(response) {
           console.log("ERROR:", response);
       });

    $rootScope.submeter = function(){
        console.log('disparado');
        if ($rootScope.pesquisar) {
            window.location.href = "localhost:3000/home/busca?q="+$rootScope.pesquisar;
          }

    }
});