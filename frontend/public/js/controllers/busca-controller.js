angular.module('livbri').controller('BuscaController',function($scope,$routeParams,$http,$rootScope){
    // verificando se tem algum parametro passado por get 'q'
    if($routeParams.q){
        //apos isso armazenamos um resultado
        $scope.resultado = $routeParams.q;

        $http.get($rootScope.api+'api/livros/busca/'+$scope.resultado)
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