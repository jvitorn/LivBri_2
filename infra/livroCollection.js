class LivroCollection{
    init(connection,mongoose){
        this.connection = connection;
        this.livroSchema(mongoose);
    }
    livroSchema(mongoose){
        //model Livros
        const LivroSchema = mongoose.Schema({
            titulo:{
                type:String,
                require:true
            },
            autor:{
                type:String,
                require:true
            },
            categoria:{
                type:String,
                require:true
            },
            imagem:{
                type:String,
                require:true
            },
            descricao:{
                type:String,
                require:true
            },
            preco:{
                type:Number,
                require:true
            },
            status:{
                type:Boolean,
                require:true
            }            
        })
        //criando uma collection usando o Schema definido
        mongoose.model('livros',LivroCollection);
        console.log('Livros Schema criado com Sucesso');
    }
}
module.exports = new LivroCollection;