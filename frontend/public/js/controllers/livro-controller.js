angular.module('livbri').controller('LivroController',function($scope,$routeParams,$http){
    const container = document.getElementById('teste');
    const classeFluida = document.getElementsByClassName('container-fluid');
        if(classeFluida){
            container.classList.remove('container-fluid');
            container.classList.add('container');
        }

    if($routeParams.id){
          //apos isso armazenamos um resultado
          $http.get('http://localhost:3333/livros/'+$routeParams.id)
          .then(results=>{
            $scope.livroUnico =results.data;
          })
          .catch(error=>{
            console.log(error);
          })
    }
});