angular.module('livbri').run(function($rootScope,$http,$document,$compile){
    
    $rootScope.api = 'http://localhost:3332/';
    
    $rootScope.categorias = [];
        $http.get($rootScope.api+"api/livros/categorias")
         .then(function(response) {
           $rootScope.categorias = response.data;
       }).catch(function(response) {
           console.log("ERROR:", response);
       });

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

    if(localStorage.getItem('authorization')){
        $rootScope.loginExists = false;
        $rootScope.loginNotExists = true;
    }else{
        $rootScope.loginExists = true;
        $rootScope.loginNotExists = false;   
    }

       
        
    
    //adicionando cor escura
    $rootScope.isAdm = false;
});