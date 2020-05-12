angular.module('livbri').controller('IndexController',function($scope,$location,$http,$rootScope){
       //categoria icons
        $scope.Categoria = (categoria)=>{
                $location.path('/home/busca/'+categoria);
        }
        //api livros recentes
        $http.get($rootScope.api+'api/livros/recent')
        .then(results=>{
                $scope.bookRecent = results.data;
        })
        .catch(error=>{console.log(error)});
        //api livros preco
        $http.get($rootScope.api+'api/livros/precos')
        .then(results=>{
            $scope.bookPrices = results.data;
        })
        .catch(error=>{
                console.log(error)
        });
        //container
        $rootScope.isfluid = false;
        $rootScope.notfluid = true;
        //navbar
        $rootScope.navbarExists = true;
        $rootScope.footerExists = true;
        //adicionando fundo escuro
        $rootScope.isAdm = false;

        
})