angular.module('livbri').controller('PesquisaController',function($scope){
        $scope.pesquisar = '';
        $scope.submeter = function(){
            if($scope.pesquisar){
                window.location.href="/home/busca?q="+$scope.pesquisar;
            }
        }
});