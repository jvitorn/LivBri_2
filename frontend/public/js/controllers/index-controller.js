angular.module('livbri').controller('IndexController',function($scope,$location,$http,$rootScope){
       //categoria icons
        $scope.Categoria = (categoria)=>{
                $location.path('/home/busca/'+categoria);
        }
        //api livros recentes
        $http.get($rootScope.api+'/recent')
        .then(results=>{
                $scope.bookRecent = results.data;
        })
        .catch(error=>console.error)
        //api livros preco
        $http.get($rootScope.api+'/precos')
        .then(results=>{
            $scope.bookPrices = results.data;
        })
        .catch(error=>console.error)
        function adicionarConteudo(){
            const navbar = document.getElementById('nav');
            const navCont = document.getElementById('navConainer');
            const footer = document.getElementById('footer');
            const footerCont = document.getElementById('footerContainer');
            const noturno = document.getElementsByClassName('noturno');
            const cssCont = document.getElementById('cssContainer');

            if(noturno){
                const bodyNoturno = document.getElementById('noturno');
                bodyNoturno.classList.remove('noturno');
            }

            if(!navbar&&!footer){
                console.log('nao existe o navbar e nao existe o footer')
                navCont.appendChild($rootScope.navConteudo);
                footerCont.appendChild($rootScope.footerConteudo);
                cssCont.appendChild($rootScope.cssConteudo);
                navCont.classList.add("bg-info");
                navCont.classList.add("navbar");
                navCont.classList.add("navbar-expand-lg")
                navCont.classList.add("navbar-dark")
                navCont.classList.add("p-4")
                
            }else{
                console.log('existe o navbar e o footer');
            }
        }

        adicionarConteudo();
        
       
});