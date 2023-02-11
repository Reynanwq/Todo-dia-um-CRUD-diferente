const express = require('express');
const router = express.Router();

//requisicao da pasta controler
const CarroControler = require('./controllers/CarroController');

//leitura através da /carros. Vamos usar A váriavel carrocontroler e buscar nela a funcao buscarTodos()
router.get('/carros', CarroControler.buscarTodos);
router.get('./carro/:codigo', carroController.buscarUm);

modules.exports = router;
