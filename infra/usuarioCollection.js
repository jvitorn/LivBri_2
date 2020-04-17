class UsuarioCollection {

    init(connection,mongoose) {
        this.connection = connection;
        this.usuarioSchema(mongoose);
    }
    usuarioSchema(mongoose){
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
        console.log('Usuarios Schema criado com Sucesso');
        }
}

module.exports = new UsuarioCollection;