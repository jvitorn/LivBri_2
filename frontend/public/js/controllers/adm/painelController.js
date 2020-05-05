angular.module('livbri').controller('PainelController',function($scope,$location,$http,$rootScope){

    //remover conteudo desnecessario
    function removerConteudo(){
        const navbar = document.getElementById('nav');
        const css    = document.getElementById('css');
        const footer = document.getElementById('footer');
        const noturno = document.getElementsByClassName('noturno');
        const navCont = document.getElementById('navConainer');
        const footerCont = document.getElementById('footerContainer');
        //adicionando classe noturno no body
        if(noturno){
            const bodyNoturno = document.getElementById('noturno');
            bodyNoturno.classList.add('noturno');
        }
        //removendo footer e navbar
        if(navbar&&footer){
            console.log('removeu o conteudo')
            //remove conteudo
            css.parentNode.removeChild(css);
            footer.parentNode.removeChild(footer);
            navbar.parentNode.removeChild(navbar);
            //remove css do navbar
            navCont.classList.remove("bg-info");
            navCont.classList.remove("navbar");
            navCont.classList.remove("navbar-expand-lg")
            navCont.classList.remove("navbar-dark")
            navCont.classList.remove("p-4")   

        }
    }
   //chamando função
    removerConteudo();

    //verificação de login
    if(localStorage.getItem('id')){
        const id = localStorage.getItem('id').length;
        if(id <= 24){
            $scope.adm = localStorage.getItem('nome');
        }else{
            window.location.href='/home/login';   
        }
    }else{
        window.location.href='/home/login';
    }

    $scope.irPara = (link)=>{
        $location.path('/adm/'+link);
    }

    $http.get($rootScope.api+'livros/count/count')
    .then(results=>{
        $scope.countTotal = results.data;     
    })
    .catch(error=>{
        console.log(error)
    })

    $http.get($rootScope.api+'livros/countinative/count')
    .then(results=>{
        $scope.countDesativados = results.data;
    })
    .catch(error=>{
        console.log(error)
    })

});