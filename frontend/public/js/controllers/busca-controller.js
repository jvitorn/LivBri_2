angular.module('livbri').controller('BuscaController',function(){
    const container = document.getElementById('teste');
    const classeFluida = document.getElementsByClassName('container-fluid');
        if(classeFluida){
            container.classList.remove('container-fluid');
            container.classList.add('container');
        }
});