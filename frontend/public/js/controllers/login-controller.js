angular.module('livbri').controller('LoginController',function($scope,$http){
    // adicionar container fluid
   
    $scope.idLogin = '';
    $scope.login = ()=>{
        const login = {id:$scope.idLogin};
        //enviando login
        $http.post('http://localhost:3333/session',login)
        .then(results=>{
            localStorage.setItem('id',$scope.idLogin);
            localStorage.setItem('nome',results.data.nome);

            window.location.href='/adm/painel';
        })
        .catch(error=>{
            $scope.msg = error.data.msg; 
            console.log("login->Error:"+error)
            console.log(error)
        })
    }
    function fluida (){
        const container = document.getElementById('teste');
        const classeFluida = document.getElementsByClassName('container');
            if(classeFluida){
                container.classList.remove('container');
                container.classList.add('container-fluid');
            }
    }
    fluida();

})