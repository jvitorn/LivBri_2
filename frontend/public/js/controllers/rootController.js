angular.module('livbri').run(function($rootScope,$http){
    $rootScope.categorias = [];
        $http.get("http://localhost:3333/categoria")
         .then(function(response) {
           $rootScope.categorias = response.data;
           console.log("OK:",$rootScope.categorias);
       }).catch(function(response) {
           console.log("ERROR:", response);
       });
});