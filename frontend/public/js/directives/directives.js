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