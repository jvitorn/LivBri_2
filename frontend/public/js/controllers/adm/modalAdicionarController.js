angular.module('livbri').controller('ModalAdicionarController',function($scope,$http){

    $scope.adicionarLivro = function(){
        //verifica se existe
        if($scope.novoLivro){    
            //caso tiver algum parametro é enviado para a api
            $http.post('http://localhost:3333/livros',$scope.novoLivro)
            //tratando resultados
            .then(results=>{
                console.log(results.data.msg);
                console.log(results.data.titulo);
                const mensagem = results.data.msg;
                const mensagemTitulo = results.data.titulo;
                //alerta
                Swal.fire(
                    mensagem,
                    'Titulo do livro:'+mensagemTitulo,
                    'success'
                  )
            })
            //tratando erros
            .catch(error=>{
                console.log(error);
                console.log(error.message);
                const msgErro = error.message;
                //alerta
                Swal.fire({
                  icon: 'error',
                  title: 'Erro',
                  text: msgErro,
                })
            })
        }
        
    }

    $scope.optionValidations = "formAdicionarLivro.descricao.$dirty && formAdicionarLivro.descricao.$invalid ||  formAdicionarLivro.preco.$dirty && formAdicionarLivro.preco.$invalid || formAdicionarLivro.imagem.$dirty && formAdicionarLivro.imagem.$invalid || formAdicionarLivro.categoria.$dirty && formAdicionarLivro.categoria.$invalid ||formAdicionarLivro.autor.$dirty && formAdicionarLivro.autor.$invalid || formAdicionarLivro.titulo.$dirty && formAdicionarLivro.titulo.$invalid"
})