angular.module('livbri').controller('ModalVisualizarController',function($scope,$http){
   $scope.idInativarUsuario = '';
    $scope.inativarUsuario = function(){
        console.log('clicou');
        if($scope.idInativarUsuario){
            console.log($scope.idInativarUsuario);
            const id = {_id:$scope.idInativarUsuario}
            $http.put('http://localhost:3333/livros/inativar',id)
            .then(results=>{
                console.log(results);
                console.log('foi');
            })
            .catch(error=>{
                console.log(error);
            })
        }
        
    }
})
