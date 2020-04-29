angular.module('livbri').controller('CarrinhoController',function($scope){
 
    let livros = []
    livros = JSON.parse(localStorage.getItem('Livros')) || [];
   
    $scope.livrosCarrinho =livros;
    //mapeando todos os valores
    const mapTotal = livros.map(results=>{
        return results.valor
    })
    // console.log(mapTotal)

    //pegando total
    $scope.livrosTotal = mapTotal.reduce((total, numero) => total + numero, 0);

    console.log($scope.livrosTotal)
    
    
});