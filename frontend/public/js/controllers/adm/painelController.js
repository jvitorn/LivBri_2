angular.module('livbri').controller('PainelController',function($scope,$location,$http,$rootScope){

    //verificação de login
    if(localStorage.getItem('authorization')){
      
    }else{
        $location.path('/home/login');
    }
    //removerConteudo
    $rootScope.navbarExists = false;
    $rootScope.footerExists = false;
    //adicionando fundo escuro
    $rootScope.isAdm = true;
    $scope.irPara = (link)=>{
        $location.path('/adm/'+link);
    }

    $http.get($rootScope.api+'api/livros/count')
    .then(results=>{
        $scope.countTotal = results.data.count;
        $scope.countDesativados = results.data.countDesactive;

    })
    .catch(error=>{
        console.log(error)
    })

    
});