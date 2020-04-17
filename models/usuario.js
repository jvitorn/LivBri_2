const mongoose = require('mongoose');
const UsuarioCollection = require('../infra/usuarioCollection');
//model
// const Usuario = new UsuarioCollection;

class UsuarioDao{

    // é enviado esses parametros de usuario pelo cliente, apos isso é inserido
    criarUsuario(usuario,res){
        
        //informações para cadastrar na collection
        const usuarioNome = usuario.nome;
        const usuarioEmail = usuario.email;
        const Usuario = mongoose.model('usuarios');
        //save -> insert
        const inserir = new Usuario ({
            nome:usuarioNome,
            email:usuarioEmail  
        }).save();

        inserir.then(()=>{
            console.log("Cadastro de Novo Usuario efetuado");
            res.status(201).json({msg:"Cadastro de Novo Usuario efetuado",id:inserir._id});
        })
        .catch((error)=>{
            console.log("Erro ao cadastrar um novo usuario ao banco de dados:"+error)
        })
    }
    listar(res){
        const Usuario = mongoose.model('usuarios'); 
        Usuario.find()
        .then((usuarios)=>{
            console.log(usuarios)
            res.json(usuarios);
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
module.exports = new UsuarioDao;