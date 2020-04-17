const Livro = require("../models/livro");
const routes = {
    list:'/livros',
    listCategory:'/livros/:category',
    listId:'/livros/:id'
}

module.exports = (app)=>{
    app.route(routes.list)
        .post((req,res)=>{
            Livro.criar(livro,res);
        })
        .get((req,res)=>{
            Livro.listar(res);
        })
    app.route(routes.listCategory)
        .get((req,res)=>{
            Livro.listarPorCategoria(categoria,res);
        })
    app.route(routes.listId)
        .put((req,res)=>{
            Livro.inativar(id,res);
        })

}