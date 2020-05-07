angular.module('livbri').controller('BuscaCategoriaController',function($scope,$routeParams,$http,$rootScope){
    // verificando se tem algum parametro passado por get 'q'
    if($routeParams.categoria){
        //apos isso armazenamos um resultado
        $scope.resultado = $routeParams.categoria;
        
        $http.get($rootScope.api+'api/livros/'+$scope.resultado)
        .then(results=>{
            $scope.livro = results.data;
        })
        .catch(error=>{
            console.log(error);
        })
    }
    $rootScope.isfluid = ()=>{return false}
    $rootScope.notfluid = ()=>{return true} 
});