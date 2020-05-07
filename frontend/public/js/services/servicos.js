angular.module('meusServicos',['ngResource'])
.factory('recursoLivro',function($resource){
		return $resource('http://localhost:3332/api/livros/:livroId',null,{
			update : { 
				method: 'post'
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
});