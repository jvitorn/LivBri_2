const Livro = require("../models/livro");
 
const routes = {
    list:'/api/livros',
    category:'/api/livros/categorias',
    search:'/api/livros/:parametro',
    searchBook:'/api/livros/busca/:search',
    listRecent:'/api/livros/recent',
    listTotal:'/api/livros/total',
    prices:'/api/livros/precos',
    countTotal:'/api/livros/count',
}

module.exports = (app)=>{
    app.route(routes.category)
        .get((req,res)=>{
            Livro.listarCategorias(res);    
        })
    app.route(routes.prices)
        .get((req,res)=>{
           Livro.precosBaixos(res); 
        })
    app.route(routes.listRecent)
        .get((req,res)=>{
            Livro.listarRecent(res);
        })
    app.route(routes.countTotal)
        .get((req,res)=>{ 
            Livro.contagemTotal(res);
        })
    app.route(routes.listTotal)
        .get((req,res)=>{
            Livro.listarTodos(res);
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
    
    
    app.route(routes.searchBook)
        .get((req,res)=>{
            const titulo = req.params.search;
            Livro.buscarLivro(titulo,res);
        })
 
    app.route(routes.category)
        .get((req,res)=>{
            Livro.listarCategorias(res);    
        })
   
  
}