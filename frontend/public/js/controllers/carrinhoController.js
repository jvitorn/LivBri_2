angular.module('livbri').controller('CarrinhoController',function($scope){
 
    let livros = []
    livros = JSON.parse(localStorage.getItem('Livros')) || [];
   
    $scope.livrosCarrinho =livros;
    //mapeando todos os valores
    const mapTotal = livros.map(results=>{
        return results.valor
    })
    //pegando total
    $scope.livrosTotal = mapTotal.reduce((total, numero) => total + numero, 0);

   
   

    $scope.capturaQtd = (a,carrinho)=>{

       const mapTitulos = livros.map(results=>{return results.titulo});
       const mapValor   = livros.map(results=>{return results.valor});
       //posicao fixa do array
       const VerPosição = mapTitulos.indexOf(a.titulo);
    //    mapTotal.indexOf(a.valor)
        const valorFixo = mapValor[VerPosição];
      
    //multiplicando aquele valor pela quantidade selecionada
    mapTotal[VerPosição] = carrinho.qtd*valorFixo
    //pegando total
    $scope.livrosTotal = mapTotal.reduce((total, numero) => total + numero, 0);    
    }

    $scope.excluirCarrinho = (a)=>{
        const mapTitulos = livros.map(results=>{return results.titulo});
        
        //captura posição do array
        const VerPosição = mapTitulos.indexOf(a.titulo);
        //remove 
        livros.splice(VerPosição,1)
        // transformando em um object
        localStorage.setItem('Livros', JSON.stringify(livros));

        livros = JSON.parse(localStorage.getItem('Livros')) || [];
        //mapeando todos os valores
        const mapTotal = livros.map(results=>{
            return results.valor
        })
        //pegando total
        $scope.livrosTotal = mapTotal.reduce((total, numero) => total + numero, 0);    

    }

    $rootScope.isfluid = ()=>{return false}
    $rootScope.notfluid = ()=>{return true} 
});