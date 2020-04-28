angular.module('livbri').controller('LivroController',function($scope,$routeParams,$http){
    const container = document.getElementById('teste');
    const classeFluida = document.getElementsByClassName('container-fluid');
        if(classeFluida){
            container.classList.remove('container-fluid');
            container.classList.add('container');
        }

    if($routeParams.id){
          //apos isso armazenamos um resultado
          $http.get('http://localhost:3333/livros/'+$routeParams.id)
          .then(results=>{
            $scope.livroUnico =results.data;
          })
          .catch(error=>{
            console.log(error);
          })
    }

    $scope.carrinho =(livro)=>{
        console.log(livro);
        const titulo = livro.titulo;
        const preco = livro.preco;
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
            carrinho.forEach(()=>{
              console.log('este')
            })
            Swal.fire(
              'Livros No Carrinho',
              valores,
              'success'
            )
          }
        })
          
          let livros = [];
       
        livros = JSON.parse(localStorage.getItem('Livros')) || [];
        // Inserindo um novo valor no localstorage
        livros.push(livro.titulo);
        // transformando em um object
        localStorage.setItem('Livros', JSON.stringify(livros));
            
           
        }
     

});