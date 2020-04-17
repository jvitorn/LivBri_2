//Model Usuarios
const UsuarioSchema = mongoose.Schema({
    nome:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})
//criando uma collection usando o schema definido
mongoose.model('usuarios',UsuarioSchema);

const Usuario = mongoose.model('usuarios');

const usuarioNome = req.body.nome;
const usuarioEmail = 'joao@joao.com'

new Usuario ({
    nome:usuarioNome,
    email:usuarioEmail
}).save()
.then(()=>{
res.status(201).json({msg:"Cadastro de Novo Usuario efetuado"})
})
.catch((error)=>{
    console.log("Erro ao cadastrar um novo usuario ao banco de dados:"+error)
})