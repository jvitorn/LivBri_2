angular.module('livbri').controller('IndexController',function($scope,$location,$http,$rootScope,$document){
       //categoria icons
        $scope.Categoria = (categoria)=>{
                $location.path('/home/busca/'+categoria);
        }
        //api livros recentes
        $http.get($rootScope.api+'livros/recent')
        .then(results=>{
                $scope.bookRecent = results.data;
        })
        .catch(error=>console.error)
        //api livros preco
        $http.get($rootScope.api+'livros/precos')
        .then(results=>{
            $scope.bookPrices = results.data;
        })
        .catch(error=>console.error)
    
        //container
        $rootScope.isfluid = ()=>{return false}
        $rootScope.notfluid = ()=>{return true}  
        //navbar
        $rootScope.navbarExists = true;
        $rootScope.footerExists = true;
        //adicionando fundo escuro
        $rootScope.isAdm = false;
});