require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyPaser = require('body-parser');
const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/api', routes); //o diretorio principal tera rota '/api'

server.listen(process.env.PORT, () => console.log('Server Running'));



