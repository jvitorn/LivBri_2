const Livro = require("../models/livro");
const routes = {
    list:'/livros',
    listCategory:'/livros/categoria/:category',
    category:'/categoria',
    active:'/livros/ativar'
}
/*
    db.livros.find({categoria:{$exists:true}}).map(function(u){
        var livroCategoria  = u.categoria;
        
        
        livroCategoria.filter(categorias);
    }
*/
module.exports = (app)=>{
    app.route(routes.list)
        .post((req,res)=>{
            const livro = req.body;
            Livro.criar(livro,res);
        })
        .get((req,res)=>{
            Livro.listar(res);
        })
        .put((req,res)=>{
            const { id } = req.body;
            Livro.inativar(id,res);
        })
    app.route(routes.listCategory)
        .get((req,res)=>{
            const categoria  = req.params.category;
            Livro.listarPorCategoria(categoria,res);
        })
    app.route(routes.category)
        .get((req,res)=>{
            Livro.listarCategorias(res);    
        })
    app.route(routes.active)
        .put((req,res)=>{
            const { id } = req.body;
            Livro.ativar(id,res);
        })
        

}