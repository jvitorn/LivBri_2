angular.module('livbri').controller('PainelController',function($scope,$location,$http,$rootScope){

    //verificação de login
    if(localStorage.getItem('id')){
        const id = localStorage.getItem('id').length;
        if(id <= 24){
            $scope.adm = localStorage.getItem('nome');
        }else{
            window.location.href='/home/login';   
        }
    }else{
        window.location.href='/home/login';
    }
    //removerConteudo
    $rootScope.navbarExists = false;
    $rootScope.footerExists = false;
    //adicionando fundo escuro
    $rootScope.isAdm = true;
    $scope.irPara = (link)=>{
        $location.path('/adm/'+link);
    }

    $http.get($rootScope.api+'livros/count/count')
    .then(results=>{
        $scope.countTotal = results.data;     
    })
    .catch(error=>{
        console.log(error)
    })

    $http.get($rootScope.api+'livros/countinative/count')
    .then(results=>{
        $scope.countDesativados = results.data;
    })
    .catch(error=>{
        console.log(error)
    })
    
});