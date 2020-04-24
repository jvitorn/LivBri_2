angular.module('livbri').controller('CrudController',function($scope,$http){

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
        console.log('entrou no if');
    }else{
        window.location.href='/home/login';
    }

});