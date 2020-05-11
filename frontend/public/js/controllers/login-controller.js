angular.module('livbri').controller('LoginController',function($scope,$http,$rootScope,$location){
    // adicionar container fluid
    $rootScope.isfluid = ()=>{return true}
    $rootScope.notfluid = ()=>{return false}

    $scope.idLogin = '';
    $scope.submeter = (login)=>{
        //verificando se tem algo inserido
        if(login.email){
           $http.post($rootScope.api+'api/session',login)
           .then(results=>{
               const token = results.data.token;

               localStorage.setItem('authorization',token)
               
               if(localStorage.getItem('authorization')){
                $location.path('adm/painel');
               }
           })
           .catch(error=>{console.error});
        }else{
            $scope.msg = 'Favor Insira um email'; 
            //alert
            Swal.fire({
                icon: 'warning',
                title: 'Nenhum Dado',
                text: 'Favor Insira algum dado!',
            })          
        }
    }
    //localizar id
    $scope.localizarId = (localizar)=>{
        //verificando se existe algum dado inserido
       if(localizar){
           //verificando se existe algum email inserido
           if(localizar.email){
                $http.post($rootScope.api+'locateId',localizar)
                .then(results=>{
                    const id = results.data._id;
                    const nome = results.data.nome;
                    //alert
                    Swal.fire(
                        'Olá '+nome,
                        'Seu Id para logar é esse: <b>'+id+'</b>',
                        'success'
                    )
                    $scope.senha=id;
                })
                .catch(error=>{
                    console.log(error)
                    //alert
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Os Seus dados estão Invalidos,Favor Procure A gestão do sistema!',
                    })
                })
            }
            else{
                //alert
            Swal.fire({
                icon: 'warning',
                title: 'Nenhum Email',
                text: 'Favor Insira o Email!',
            })    
            }
        }else{
            //alert
            Swal.fire({
                icon: 'warning',
                title: 'Nenhum Dado',
                text: 'Favor Insira algum dado!',
            })
        }
    }
    $scope.validacaoId =()=>{
        const id = $scope.idLogin;
        
            if(id.length == 24){
                return false;
            }else{
                return true;
            }
    }
    
 
})