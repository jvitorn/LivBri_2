const mongoose = require('mongoose');
const LivroCollection = require('../infra/livroCollection');

class LivroDao{
    criar(livro,res){
        const { titulo,autor,categoria,imagem,descricao,preco} = livro;
        const Livro = mongoose.model('livros');

        const inserir = new Livro({
            titulo:titulo,
            autor:autor,
            categoria:categoria,
            imagem:imagem,
            descricao:descricao,
            preco:preco,
            status:true
        }).save();

        inserir.then((results)=>{
            res.status(201).json({msg:"Livro Cadastrado Com Sucesso",id:results._id,titulo:results.titulo});
        })
        .catch((error)=>{
            res.status(401).json({msg:"Houve um erro ao cadastrar um livro",error:error});
        })
    }
    listar(res){
        const Livro = mongoose.model('livros');
        //mostrando todos os livros
        Livro.find().sort({titulo:1})
        .then((results)=>{
            res.json(202).json(results);
        })
        .catch((error)=>{
            res.json(400).json(error);
        })
    }
    listarPorCategoria(categoria,res){

    }
    inativar(id,res){

    }
    
}
module.exports = new LivroDao;