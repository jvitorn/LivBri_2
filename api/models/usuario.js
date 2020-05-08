const mongoose = require('mongoose');

//model

class UsuarioDao{

    // é enviado esses parametros de usuario pelo cliente, apos isso é inserido
    async criarUsuario(usuario,res){
        
        //informações para cadastrar na collection
        const usuarioNome = usuario.nome;
        const usuarioEmail = usuario.email;
        const usuarioSenha = usuario.senha;
        const Usuario = mongoose.model('usuarios');
       
        try {
             //save -> insert
            const inserir = await new Usuario ({
                nome:usuarioNome,
                email:usuarioEmail,
                senha:usuarioSenha
            }).save();

            res.status(201).json({msg:"Cadastro de Novo Usuario efetuado",id:inserir._id});
        }
        catch(error){
            res.status(404).json({msg:"Erro ao cadastrar um novo usuario ao banco de dados",error})
        }
    }
    async listar(res){
        const Usuario = mongoose.model('usuarios'); 
            try{
                 //find
                const find = await Usuario.find().sort({nome:1}).exec();
                res.status(202).json(find);
            }catch(err){
                res.status(404).json({msg:"Erro ao listar usuario ao banco de dados",err})
            }   
    }
    async logarUsuario(usuario,res){
        //Collection de Usuarios
        const Usuario = mongoose.model('usuarios');
        //Função de procurar Id e enviar os dados daquele Usuario
        const id  = usuario.id;
       
        try{
            const find = await Usuario.findOne( { _id:id } )
            res.status(202).json(find);
        }
        catch(error){
            res.status(400).json({msg:"Erro ao logar usuario,favor tente novamente!",error});
        }

    }
    async atualizar(id,valores,res){
        //Collection de Usuarios
        const Usuario = mongoose.model('usuarios');
        try{
             //atualizar informações
            const find = await Usuario.updateOne({_id:id},{
                nome:valores.nome,
                email:valores.email
            })
            res.status(201).json({msg:"Dados Atualizados Com Sucesso",find});
        }
        catch(error){
            res.status(400).json({msg:"Erro ao atualizar usuario ao banco de dados",error});
        }
        //Função de 
    }
    async deletarUsuario(id,res){
        //Collection de Usuarios
        const Usuario = mongoose.model('usuarios');
        try{
            //Função de remover usuario passando como parametro o ID dele 
            const deleteUser = await Usuario.deleteOne({ _id:id })
            //passando status e um json com a resposta
            res.status(204).json({msg:"Usuario Removido do Banco de Dados",deleteUser});
        }
        catch(error){
            res.status(400).json({msg:"Erro ao deletar o  usuario ao banco de dados",error});
        }
    }
    async localizarId(usuario,res){
        const email = usuario.email;
        //Collection de Usuarios
        const Usuario = mongoose.model('usuarios');
        try{
            //atualizar informações
            const find = await Usuario.findOne({email:email})
            res.status(200).json(find);
        }
        catch(error){
            res.status(400).json({msg:"Erro ao localizar usuario",error});
        }

    }
}
module.exports = new UsuarioDao;