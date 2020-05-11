angular.module('livbri').controller('CrudController',function($scope,$http,$rootScope,$location,recursoLivro){
     //verificação de login
     if(localStorage.getItem('authorization')){
      
    }else{
        $location.path('/home/login');
    }
    //chamando livros
    $http.get($rootScope.api+'api/livros/total')
    .then(results=>{
        $scope.listaLivros = results.data;

    })
    .catch(error=>{
        console.log(error)
    })
    //chamando categorias
    $scope.categoria = $rootScope.categorias;
   

    //funções de capturar dados
    $scope.visualizar = function(livro){
        $scope.livroStatusSelecionado = livro.status;
        $scope.livroCategoriaSelecionado = livro.categoria;
        $scope.infoLivro = livro;

        document.getElementById('mySelect').value = $scope.livroStatusSelecionado;
        document.getElementById('categoria').value = $scope.livroCategoriaSelecionado;

    }  
    //função dos changes 
    $scope.enviarEdicao = (livro)=>{
        
        if(livro){
            $http.post($rootScope.api+'api/livros/',livro)
            .then(results=>{
                console.log(results)
                const mensagem = results.data.msg;
                const id        = results.data.id;
                Swal.fire(
                    id,
                    mensagem,
                    'success'
                  )
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
    //inativar
    $scope.inativarIcon = (id)=>{
     
        if(id){
            const teste = {_id:id}
            $http.put($rootScope.api+'livros/inativar',teste)
            .then(results=>{
                const msg = results.data.msg;
                console.log(results);
                Swal.fire(
                    'Sucesso',
                    msg,
                    'success'
                  )
            })
            .catch(error=>console.error);
        }
        
    }
});