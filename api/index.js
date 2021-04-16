require('dotenv').config();
const configExpress = require('./config/configExpress');
const config = require('config');

app = configExpress()

app.listen(config.get('api.port'), () =>{
    console.log('Servidor Rodando')
})