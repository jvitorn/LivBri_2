angular.module('livbri').controller('ModalVisualizarController',function($scope,$http,$rootScope){
   $scope.idInativarUsuario = '';
    $scope.inativarUsuario = function(){

        if($scope.idInativarUsuario){

            const id = {_id:$scope.idInativarUsuario}
            $http.put($rootScope.api+'livros/inativar',id)
            .then(results=>{
                Swal.fire(results.data.msg);
                console.log(results);
            })
            .catch(error=>{
                console.log(error);
            })
        }
        
    }
})
