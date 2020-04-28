const mongoose = require('mongoose');


class LivroDao{
    criar(livro,res){
        const { titulo,autor,categoria,imagem,descricao,preco} = livro;
        const precoNumber = parseInt(preco);
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
        Livro.find({status:true}).sort({titulo:1})
        .then((results)=>{
            res.status(202).json(results);
        })
        .catch((error)=>{
            res.status(400).json(error);
        })
    }
    listarRecent(res){
        const Livro = mongoose.model('livros');
        //mostrando todos os livros
        Livro.find({status:true}).sort({_id:-1}).limit(4)
        .then((results)=>{
            res.status(202).json(results);
        })
        .catch((error)=>{
            res.status(400).json(error);
        })
    }
    precosBaixos(res){
        const Livro = mongoose.model('livros');
        //mostrando preços
        Livro.find({status:true}).sort({preco:1}).limit(4)
        .then((results)=>{
            res.status(202).json(results);
        })
        .catch((error)=>{
            res.status(400).json(error);
        })
    }
    contagemTotal(res){
        const Livro = mongoose.model('livros');
        //contagem
        Livro.count({})
        .then((results)=>{
            res.status(202).json(results);
        })
        .catch((error)=>{
            res.status(400).json(error);
        })
    }
    contagemAtivos(res){
        const Livro = mongoose.model('livros');
        //contagem
        Livro.count({status:false})
        .then((results)=>{
            res.status(202).json(results);
        })
        .catch((error)=>{
            res.status(400).json(error);
        }) 
    }
    listarTodos(res){
        const Livro = mongoose.model('livros');
        //mostrando todos os livros
        Livro.find({}).sort({titulo:1})
        .then((results)=>{
            res.status(202).json(results);
        })
        .catch((error)=>{
            res.status(400).json(error);
        })
    }
    listarCategorias(res){
        const Livro = mongoose.model('livros');
        const categorias = [{categoria:"Fantasia"},{categoria:"Ficção"},{categoria:"Romance"},{categoria:"Poesia"},{categoria:"Biografia"},{categoria:"Humor"},{categoria:"Contos"},{categoria:"Saúde"},{categoria:"Música"},{categoria:"Fotografia"},{categoria:"Artes"}];
        
        res.status(200).json(categorias);
        /**
        db.livros.find({categoria:{$exists:true}}).map(function(u){
            var livroCategoria  = u.categoria;
            return livroCategoria;
        })
         */  
    }
    listarPorCategoria(categoria,res){
        const Livro = mongoose.model('livros');
        Livro.find( {"categoria":categoria,"status":true }).sort({categoria:1})
        .then((results)=>{
            res.status(202).json(results);
        })
        .catch((error)=>{
            res.status(400).json(error);
        })
    }
    listarLivro(id,res){
        const Livro = mongoose.model('livros');
        //mostrando todos os livros
        Livro.findOne({_id:id, status: true})
        .then((results)=>{
            res.status(202).json(results);
        })
        .catch((error)=>{
            res.status(400).json(error);
        })
    }
    buscarLivro(livro,res){
        const Livro = mongoose.model('livros');
        const pesquisa = livro; 
        //mostrando todos os livros
        Livro.find({titulo : {$regex:pesquisa},status:true})
        .then((results)=>{
            res.status(202).json(results);
        })
        .catch((error)=>{
            res.status(400).json(error);
        })
    }
    inativar(id,res){
        const Livro = mongoose.model('livros');
        const update = { status: false }
        
        Livro.updateOne({_id:id},update)
        .then((results)=>{
            res.status(201).json({msg:"Livro Inativado",result:results,id:id});
        })
        .catch((error)=>{
            res.status(400).json(error);
        })
    }
    ativar(id,res){
        const Livro = mongoose.model('livros');
        const update = { status : true }
        Livro.updateOne({_id:id},update)
        .then((results)=>{
            res.status(201).json({msg:"Livro Ativado com sucesso",results});
        })
        .catch((error)=>{
            res.status(400).json(error);
        })
    }
    atualizar(livro,res){
        const Livro = mongoose.model('livros');

        const update = {titulo:livro.titulo,status:livro.status ,autor:livro.autor,categoria:livro.categoria,imagem:livro.imagem,descricao:livro.descricao,preco:livro.preco}

        Livro.updateOne({_id:livro._id},update)
        .then(results=>{
            res.status(201).json({msg:"Dados Do Livro Atualizado",result:results,id:livro._id});
        })
        .catch(error=>{
            res.status(400).json(error);
        })
    }
    
}
module.exports = new LivroDao;