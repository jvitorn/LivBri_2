angular.module('meusServicos',['ngResource'])
.factory('recursoLivro',function($resource){
		return $resource('http://localhost:3332/api/livros/:livroId',null,{
			update : { 
				method: 'put'
			}
        });
})

.factory('cadastroDeLivro',function(recursoLivro,$q){

	let servico = {};

    servico.cadastrar = function(livro){
        return $q(function(resolve,reject){
            //caso existir esse id ele ira atualizar as informações 
            if(livro._id){
                recursoLivro.update({id:livro._id},livro,function(){
                    resolve({
                        mensagem:'Livro: '+ livro.titulo + ' atualizado com sucesso!',
                        inclusao:false
                    });
                },function(error){
                    console.log(error);
                    reject({
                        mensagem:'Não foi possivel alterar o Livro ' + livro.titulo
                    });
                });
            }
            //se nao existir ele ira criar uma nova informação de livro no banco 
            else {
                recursoLivro.save(livro,function(){
                    resolve({
                        mensagem:'Livro ' + livro.titulo + ' Incluido com sucesso ',
                        inclusao:true
                    });
                },function(error){
                    console.log(error);
                    reject({
                        mensagem:'Não foi possivel cadastrar o livro ' + livro.titulo
                    });
                })
            }
        });
	};
	return servico;
})

.factory('recursoUsuario',function($resource){
        return $resource('http://localhost:3332/api/usuario/:usuarioId',null,{
			update : { 
				method: 'post'
			}
        });
})
.factory('cadastroDeUsuario',function(recursoUsuario,$q){
    let servico = {};

    servico.cadastrar = function(usuario){
        return $q(function(resolve,reject){
            //caso existir esse id ele ira atualizar as informações 
            if(usuario._id){
                recursoUsuario.update({id:usuario._id},usuario,function(){
                    resolve({
                        mensagem:'Livro: '+ usuario.titulo + ' atualizado com sucesso!',
                        inclusao:false
                    });
                },function(error){
                    console.log(error);
                    reject({
                        mensagem:'Não foi possivel alterar o Livro ' + usuario.titulo
                    });
                });
            }
            //se nao existir ele ira criar uma nova informação de livro no banco 
            else {
                recursoUsuario.save(usuario,function(){
                    resolve({
                        mensagem:'Livro ' + usuario.titulo + ' Incluido com sucesso ',
                        inclusao:true
                    });
                },function(error){
                    console.log(error);
                    reject({
                        mensagem:'Não foi possivel cadastrar o livro ' + usuario.titulo
                    });
                })
            }
        });
	};
	return servico;
})

