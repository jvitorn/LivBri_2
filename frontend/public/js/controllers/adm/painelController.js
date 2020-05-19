angular.module('livbri').controller('PainelController',function($scope,$location,$http,$rootScope){

    //verificação de login
    if(localStorage.getItem('authorization')){
      var toten = localStorage.getItem('authorization');
    }else{
        $location.path('/home/login');
    }
    //removerConteudo
    $rootScope.navbarExists = false;
    $rootScope.footerExists = false;
    //adicionando fundo escuro
    $rootScope.isAdm = true;
    $scope.irPara = (link)=>{
        $location.path('/adm/'+link);
    }

    $http.get($rootScope.api+'api/livros/count',{
        headers: {'x-access-token':toten}
    })
    .then(results=>{
        $scope.countTotal = results.data.count;
        $scope.countDesativados = results.data.countDesactive;
        $scope.authAdicionar = true;

    })
    .catch(error=>{
        if(error.data.auth == false){
            $scope.authAdicionar = error.data.auth;
            
            Swal.fire({
                title:'Falha',
                text: 'Favor Se logue Novamente',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Logar'
              }).then((result) => {
                if (result.value) {
                    window.location.href = '/home/login';
                }
              })
        }else{

        }
    })

    $scope.logout = ()=>{
        localStorage.clear();
        $location.path('/home/');
    }
});