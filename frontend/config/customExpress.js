// require
const express = require('express');
const bodyParser = require('body-parser');
const path    = require('path');

module.exports = ()=>{
    // criando um app em express
    const app = express();
    //use midwares
    //definindo os arquivos da aplicação
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
    return app;
    
}