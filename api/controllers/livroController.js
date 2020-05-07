const Livro = require("../models/livro");
 
const routes = {
    list:'/livros',
    category:'/livros/categorias',
    search:'/livros/:parametro',
    searchBook:'/livros/busca/:search',
    listRecent:'/livros/recent',
    listTotal:'/livros/total',
    prices:'/livros/precos',
    countTotal:'/livros/count/count',
    countdeactivate:'/livros/countinative/count'
}
/*
    db.livros.find({categoria:{$exists:true}}).map(function(u){
        var livroCategoria  = u.categoria;
        
        
        livroCategoria.filter(categorias);
    }
*/
module.exports = (app)=>{
    app.route(routes.category)
        .get((req,res)=>{
            Livro.listarCategorias(res);    
        })
    app.route(routes.prices)
        .get((req,res)=>{
           Livro.precosBaixos(res); 
        })
    app.route(routes.list)
        .post((req,res)=>{
            const livro = req.body;
            Livro.criar(livro,res);
        })
        .get((req,res)=>{
            Livro.listar(res);
        })
        .put((req,res)=>{
            const livro = req.body;
            Livro.atualizar(livro,res);
        })
    app.route(routes.search)
        .get((req,res)=>{
            const parametro  = req.params.parametro;
            Livro.buscar(parametro,res);
        })
    app.route(routes.listRecent)
        .get((req,res)=>{
            Livro.listarRecent(res);
        })
    app.route(routes.listTotal)
        .get((req,res)=>{
            Livro.listarTodos(res);
        })
    
    app.route(routes.searchBook)
        .get((req,res)=>{
            const titulo = req.params.search;
            Livro.buscarLivro(titulo,res);
        })
 
    app.route(routes.category)
        .get((req,res)=>{
            Livro.listarCategorias(res);    
        })
    app.route(routes.countTotal)
        .get((req,res)=>{ 
            Livro.contagemTotal(res);
        })
    app.route(routes.countdeactivate)
        .get((req,res)=>{
            Livro.contagemAtivos(res);
        })
}