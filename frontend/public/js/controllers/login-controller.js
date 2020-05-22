angular.module('livbri').controller('LoginController',function($scope,$http,$rootScope,$location,cadastroDeUsuario){
    // adicionar container fluid
    $rootScope.isfluid = true
    $rootScope.notfluid = false
    $scope.submitar = (cadastrar)=>{
        if(cadastrar.nome && cadastrar.email && cadastrar.senha ){
            return false
        }else{
            
            return true
        }
    }
    $scope.idLogin = '';
    $scope.submeter = (login)=>{
        //verificando se tem algo inserido
        if(login.email){
           $http.post($rootScope.api+'api/session',login)
           .then(results=>{
               const token = results.data.token;
               const authenticate = results.data.adm;

               localStorage.setItem('authorization',token)
               localStorage.setItem('auth',authenticate)
               if(localStorage.getItem('authorization')){
                   const verify = localStorage.getItem('auth')
                    verify == 'true' ? $location.path('adm/painel') : $location.path('home/') 
               }
           })
           .catch(error=>{
               console.warn(error)
               $scope.msg = error.data.msg;
            });
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
    $scope.cadastrarUsuario = (cadastrar)=>{
        //verificando se existe algum dado inserido
       if(cadastrar){
           //verificando se existe algum email inserido
           if(cadastrar.email){
              if(cadastrar.senha){
                cadastroDeUsuario.cadastrar(cadastrar)
                .then(results=>{
                    const mensagem = results.mensagem;
                    Swal.fire({
                        title:'Cadastro',
                        text: mensagem,
                        icon: 'success',
                    })
                  
                })
                .catch(error=>{
                    const mensagem = error.mensagem;
                    Swal.fire({
                        title:'Cadastro',
                        text: mensagem,
                        icon: 'success',
                    })
                })
              }else{
                //alert
                Swal.fire({
                    icon: 'warning',
                    title: 'Nenhum Senha',
                    text: 'Favor Insira a Senha!',
                })   
              }
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