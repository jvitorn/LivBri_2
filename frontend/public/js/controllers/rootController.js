angular.module('livbri').run(function($rootScope,$http,$document){
    $rootScope.pesquisar = '';
    $rootScope.api = 'http://192.168.0.104:3332/';
    $rootScope.categorias = [];
        $http.get($rootScope.api+"categoria")
         .then(function(response) {
           $rootScope.categorias = response.data;
       }).catch(function(response) {
           console.log("ERROR:", response);
       });

    $rootScope.submeter = function(){
        console.log('disparado');
        if ($rootScope.pesquisar) {
            window.location.href = "localhost:3000/home/busca?q="+$rootScope.pesquisar;
          }

    }
    $rootScope.isfluid = ()=>{
        const container = document.getElementById('teste');
        let valor ;
        return container ?  valor = false : valor = true
    }
    $rootScope.notfluid = ()=>{
        const container = document.getElementById('teste');
        let valor ;
        return container ?   valor = true : valor = false 
    }
    //removendo conteudo
    $rootScope.navbarExists = true;
    $rootScope.footerExists = true;
    //adicionando cor escura
    $rootScope.isAdm = false;
});