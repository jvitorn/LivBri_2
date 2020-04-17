const Usuario = require('../models/usuario');

module.exports =  (app) => {
    app.route('/usuario')
        .get((req,res)=>{
            Usuario.listar(res);
        })
        .post((req,res)=>{
           const usuario = req.body;
           Usuario.criarUsuario(usuario,res);
        });
}