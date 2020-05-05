angular.module('livbri').controller('ModalAdicionarController',function($scope,$http,$rootScope,cadastroDeLivro){

    $scope.adicionarLivro = function(){
        //verifica se existe
        if($scope.novoLivro){    
            // //caso tiver algum parametro é enviado para a api
            // $http.post($rootScope.api+'livros',$scope.novoLivro)
            // //tratando resultados
            // .then(results=>{
            //     console.log(results.data.msg);
            //     console.log(results.data.titulo);
            //     const mensagem = results.data.msg;
            //     const mensagemTitulo = results.data.titulo;
            //     //alerta
            //     Swal.fire(
            //         mensagem,
            //         'Titulo do livro:'+mensagemTitulo,
            //         'success'
            //       )
            // })
            // //tratando erros
            // .catch(error=>{
            //     console.log(error);
            //     console.log(error.message);
            //     const msgErro = error.message;
            //     //alerta    
            //     Swal.fire({
            //       icon: 'error',
            //       title: 'Erro',
            //       text: msgErro,
            //     })
            // })
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