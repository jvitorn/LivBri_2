angular.module('livbri').controller('LoginController',function($scope,$http,$rootScope){
    // adicionar container fluid
  
    $scope.idLogin = '';
    $scope.login = ()=>{
        const login = {id:$scope.idLogin};
        //verificando se tem algo inserido
        if(login.id){
            //enviando login
            $http.post($rootScope.api+'session',login)
            .then(results=>{
                localStorage.setItem('id',$scope.idLogin);
                localStorage.setItem('nome',results.data.nome);

                window.location.href='/adm/painel';
            })
            .catch(error=>{
                $scope.msg = error.data.msg; 
                console.log("login->Error:"+error)
                console.log(error)
                const erro = error.data;
                //alert
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: erro.msg,
                })
            })
        }else{
            $scope.msg = 'Favor Insira um ID'; 
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