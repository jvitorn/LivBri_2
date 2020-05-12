angular.module('livbri').controller('LivroController',function($scope,$routeParams,$http,$rootScope,recursoLivro){
    
    if($routeParams.id){
          //apos isso armazenamos um resultado
          recursoLivro.get({livroId:$routeParams.id},(results)=>{
            $scope.livroUnico = results;
        })
    }

    $scope.carrinho =(livro)=>{
      
        let livros = [];
       
        livros = JSON.parse(localStorage.getItem('Livros')) || [];
        let mapLivros = livros.map(livro=>{
          return livro.titulo;
        }) 
        const localizaLivros = mapLivros.indexOf(livro.titulo);
        //verificando livros duplicados
        if(localizaLivros != -1){
            //se localizar nao insere o valor 
            Swal.fire(
              'Livro Localizado',
              'Você ja adicionou esse livro no seu carrinho',
              'warning'
            )
        }else{
            //se nao localizado , insere o valor
            // Inserindo um novo valor no localstorage
            livros.push({titulo:livro.titulo,valor:livro.preco});
            // transformando em um object
            localStorage.setItem('Livros', JSON.stringify(livros));
            //Alert
            Swal.fire({
              title: 'Livro Adicionado Com Sucesso!',
              text: "Quer Ver o Seu Carrinho?",
              icon: 'success',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Sim!'
            }).then((result) => {
              if (result.value) {
                let carrinho = localStorage.getItem('Livros');
                Swal.fire(
                  'Livros No Carrinho',
                  mapLivros+' '+livro.titulo+'<br>',
                  'success'
                )
              }
            })
        }
        

        
        }
     
        
});