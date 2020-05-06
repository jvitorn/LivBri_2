angular.module('livbri').controller('ModalAdicionarController',function($scope,$http,$rootScope,cadastroDeLivro){

    $scope.adicionarLivro = function(){
        //verifica se existe
        if($scope.novoLivro){    
            cadastroDeLivro.cadastrar($scope.novoLivro)
            .then(results=>{
                const mensagem = results.mensagem;
                Swal.fire(
                    'Sucesso',
                    mensagem,
                    'success'
                )
            })
            .catch(error=>{
                const mensagem = error.mensagem;
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: mensagem,
                })
                console.log(error)
            })
        }
        
    }

    $scope.optionValidations = "formAdicionarLivro.descricao.$dirty && formAdicionarLivro.descricao.$invalid ||  formAdicionarLivro.preco.$dirty && formAdicionarLivro.preco.$invalid || formAdicionarLivro.imagem.$dirty && formAdicionarLivro.imagem.$invalid || formAdicionarLivro.categoria.$dirty && formAdicionarLivro.categoria.$invalid ||formAdicionarLivro.autor.$dirty && formAdicionarLivro.autor.$invalid || formAdicionarLivro.titulo.$dirty && formAdicionarLivro.titulo.$invalid"
})