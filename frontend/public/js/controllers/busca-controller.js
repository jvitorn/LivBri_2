angular.module('livbri').controller('BuscaController',function($scope,$routeParams,$http){
    const container = document.getElementById('teste');
    const classeFluida = document.getElementsByClassName('container-fluid');
        if(classeFluida){
            container.classList.remove('container-fluid');
            container.classList.add('container');
        }
    console.log('entrou no controller de busca');
    // verificando se tem algum parametro passado por get 'q'
    if($routeParams.q){
        //apos isso armazenamos um resultado
        $scope.resultado = $routeParams.q;

        $http.get('http://localhost:3333/livros/busca/'+$scope.resultado)
        .then(results=>{
            $scope.livro = results.data;
        })
        .catch(error=>{
            console.log(error);
        })
    }
});