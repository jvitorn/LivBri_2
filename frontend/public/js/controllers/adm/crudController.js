angular.module('livbri').controller('CrudController',function($scope,$http){
    $scope.listaLivros = [];
    //remover conteudo desnecessario
    function removerConteudo(){
        const navbar = document.getElementById('nav');
        const css    = document.getElementById('css');
        const footer = document.getElementById('footer');
        const noturno = document.getElementsByClassName('noturno');
        //adicionando classe noturno no body
        if(noturno){
            const bodyNoturno = document.getElementById('noturno');
            bodyNoturno.classList.add('noturno');
        }
        //removendo footer e navbar
        if(navbar.parentNode&&footer.parentNode){
            css.parentNode.removeChild(css);
            footer.parentNode.removeChild(footer);
            navbar.parentNode.removeChild(navbar);
        }
    }
   //chamando função
    removerConteudo();

    //verificação de login
    if(localStorage.getItem('id')){
        const id = localStorage.getItem('id').length;
        console.log(id);
        if(id <= 24){
            $scope.adm = localStorage.getItem('nome');
        }else{
            window.location.href='/home/login';   
        }
    }else{
        window.location.href='/home/login';
    }

    //chamando livros
    $http.get('http://localhost:3333/livros/total')
    .then(results=>{
        $scope.listaLivros = results.data;
    })
    .catch(error=>{
        console.log(error)
    })
    

    //funções de capturar dados
    $scope.visualizar = function(livro){
        $scope.livroStatusSelecionado = livro.status;
        $scope.livroCategoriaSelecionado = livro.categoria;
        $scope.infoLivro = livro;

        document.getElementById('mySelect').value = $scope.livroStatusSelecionado;
        document.getElementById('categoria').value = $scope.livroCategoriaSelecionado;

    }  
    //chamando categorias
    $http.get('http://localhost:3333/categoria')
    .then(results=>{
        $scope.categoria = results.data;
    })
    .catch(error=>{
        Swal.fire(error);
        console.log(error);
    })
    
    
    //função dos changes 
    $scope.enviarEdicao = (livro)=>{
        
        if(livro){
            $http.post('http://localhost:3333/livros/atualizar',livro)
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
            $http.put('http://localhost:3333/livros/inativar',teste)
            .then(results=>{
                const msg = results.data.msg;
                const result = results.data.result;
                const _id = results.data.id;
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