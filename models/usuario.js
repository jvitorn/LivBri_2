const mongoose = require('mongoose');

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

        inserir.then((results)=>{
            console.log("Cadastro de Novo Usuario efetuado");
            res.status(201).json({msg:"Cadastro de Novo Usuario efetuado",id:results._id});
        })
        .catch((error)=>{
            res.status(404).json({msg:"Erro ao cadastrar um novo usuario ao banco de dados",error})
        })
    }
    listar(res){
        const Usuario = mongoose.model('usuarios'); 
        //mostrando todos os usuarios
        Usuario.find().sort({nome:1})
        .then((usuarios)=>{
            //passando status e um json com a resposta
            res.status(202).json(usuarios);
        })
        .catch((error)=>{
            res.status(404).json({msg:"Erro ao listar usuarios ao banco de dados",error})
        })
    }
    logarUsuario(usuario,res){
        //Collection de Usuarios
        const Usuario = mongoose.model('usuarios');
        //Função de procurar Id e enviar os dados daquele Usuario
        const id  = usuario.id;

        Usuario.findOne( { _id:id } )
        .then((results)=>{
            res.status(202).json({nome:results.nome});
        })
        .catch((error)=>{
            res.status(400).json({msg:"Erro ao logar usuario ao banco de dados",error});
        })

    }
    atualizar(id,valores,res){
        //Collection de Usuarios
        const Usuario = mongoose.model('usuarios');
        //atualizar informações
        Usuario.updateOne({_id:id},{
            nome:valores.nome,
            email:valores.email
        })
        .then((results)=>{
            res.status(201).json({msg:"Dados Atualizados Com Sucesso",results});
        })
        .catch((error)=>{
            res.status(400).json({msg:"Erro ao atualizar usuario ao banco de dados",error});
        })
        //Função de 
    }
    deletarUsuario(id,res){
        //Collection de Usuarios
        const Usuario = mongoose.model('usuarios');
        //Função de remover usuario passando como parametro o ID dele 
        Usuario.deleteOne({ _id:id })
        .then((usuario)=>{
            //passando status e um json com a resposta
            res.status(204).json({msg:"Usuario Removido do Banco de Dados"});
        })
        .catch((error)=>{
            res.status(400).json({msg:"Erro ao deletar o  usuario ao banco de dados",error});
        })
    }
}
module.exports = new UsuarioDao;