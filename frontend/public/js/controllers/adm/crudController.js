angular.module('livbri').controller('CrudController',function($scope,$http,$rootScope,$location,$document,cadastroDeLivro){
     //verificação de login
     if(localStorage.getItem('authorization')){
        var toten = localStorage.getItem('authorization');
    }else{
        $location.path('/home/login');
    }
    //chamando livros
    $http.get($rootScope.api+'api/livros/total',{
        headers: {'x-access-token':toten}
    })
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
        if ($scope.infoLivro) {
            cadastroDeLivro.cadastrar(livro)
            .then(results=>{
                $scope.mensagem = results.mensagem;
                const mensagem  = results.mensagem;
                Swal.fire({
                    title:'Livro',
                    text: mensagem,
                    icon: 'success',
                })
               
            })
            .catch(error=>{
                $scope.mensagem = error.mensagem;
                 
            })
           
        }
        
    }
    //inativar
    $scope.inativarIcon = (livro)=>{
     
        if ($scope.infoLivro) {
            $scope.infoLivro.status = false;
            cadastroDeLivro.cadastrar(livro)
            .then(results=>{
                $scope.mensagem = results.mensagem;
                const mensagem  = results.mensagem;
                Swal.fire({
                    title:'Livro',
                    text: mensagem,
                    icon: 'success',
                })
               
            })
            .catch(error=>{
                $scope.mensagem = error.mensagem;
                 
            })
           
        }
        
    }
    $scope.limpar = ()=>{
        $scope.infoLivro = ' ';
    }
});