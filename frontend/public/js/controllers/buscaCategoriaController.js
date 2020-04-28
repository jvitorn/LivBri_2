angular.module('livbri').controller('BuscaCategoriaController',function($scope,$routeParams,$http){
    const container = document.getElementById('teste');
    const classeFluida = document.getElementsByClassName('container-fluid');
        if(classeFluida){
            container.classList.remove('container-fluid');
            container.classList.add('container');
        }
    
    // verificando se tem algum parametro passado por get 'q'
    if($routeParams.categoria){
        //apos isso armazenamos um resultado
        $scope.resultado = $routeParams.categoria;
        
        $http.get('http://localhost:3333/livros/categoria/'+$scope.resultado)
        .then(results=>{
            $scope.livro = results.data;
        })
        .catch(error=>{
            console.log(error);
        })
    }
});