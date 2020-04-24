angular.module('livbri').controller('BuscaCategoriaController',function($scope,$routeParams,$http){
    // verificando se tem algum parametro passado por get 'q'
    if($routeParams.categoria){
        //apos isso armazenamos um resultado
        $scope.resultado = $routeParams.categoria;
        console.log('entrou no controler de busca categoria');
        
        $http.get('http://localhost:3333/livros/categoria/'+$scope.resultado)
        .then(results=>{
            $scope.livro = results.data;
        })
        .catch(error=>{
            console.log(error);
        })
    }
});