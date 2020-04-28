angular.module('meusServicos',['ngResource'])
.factory('recursoLivroAtualiza',function($resource){
		return $resource('http://localhost:3333/livros/atualizar',null,{
			update : { 
				method: 'post'
			}
        });
})