angular.module('livbri').controller('LoginController',function(){
    const container = document.getElementById('teste');
    const classeFluida = document.getElementsByClassName('container');
        if(classeFluida){
            container.classList.remove('container');
            container.classList.add('container-fluid');
        }
    console.log('entrou no controller de Login');
})