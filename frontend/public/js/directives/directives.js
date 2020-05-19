angular.module('diretivas',[])
        .directive('minhaFoto',function(){

            let ddo = {};

            ddo.restrict = "AE";

            ddo.scope = {
                titulo:'@',
                url:'@'
            };

            ddo.template =  '<img class="card-img-top img-fluid" src="{{url}}" alt="{{alt}}"></img>';

            return ddo;
        })
        .directive('meuCard',function(){

            let ddo ={};

            ddo.restrict = "AE";

            ddo.scope = {
                titulo:'@',
                url:'@',
                imagem:'@',
                descricao:'@',
                id:'@',
                preco:'@',
                categoria:'@'
            };

            ddo.templateUrl = 'js/directives/model/meu-card.html'

            return ddo;
        })
        .directive('adicionarLivro',function(){
            let ddo = {};

            ddo.restrict = "AE",
            
            ddo.scope = {
                habilita:'@'
            };

            ddo.template = '<button class="btn btn-success"  data-toggle="modal" data-target="#editarModal" ng-if=habilita>Adicionar Livro</button>'
            
            return ddo;
        })
        .directive('voltarPara',function(){

            let ddo = {};

            ddo.restrict = 'AE',

            ddo.scope = {
                titulo:'@',
                link:'@',
                botao:'@'
            };

            ddo.template='<a class="{{botao}}" href="{{link}}">{{titulo}}</a>';

            return ddo;
        })
        .directive('modalDesativar',function(){

            let ddo = {};

            ddo.restrict = 'AE',

            ddo.templateUrl ='js/directives/model/modalDesativar.html';

            return ddo;
        })
        .directive('modalEditar',function(){

            let ddo = {};

            ddo.restrict = 'AE',

            ddo.templateUrl='js/directives/model/modalEditar.html';

            return ddo;
        })
        .directive('modalInfo',function(){

            let ddo = {};

            ddo.restrict = 'AE',

            ddo.templateUrl = 'js/directives/model/modalInfo.html';

            return ddo;
        })
        .directive('modalAdicionar',function(){

            let ddo = {};

            ddo.restrict = 'AE',


            ddo.templateUrl = 'js/directives/model/modalAdicionar.html';

            return ddo;
        })