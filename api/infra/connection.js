//require
const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
//configurações de conexao
const connection = mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})

module.exports = connection;