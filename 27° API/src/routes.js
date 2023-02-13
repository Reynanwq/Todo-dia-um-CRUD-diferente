const express = require('express'):
const router = express.Route();

const carroController = require('./controllers/carroController');

router.get('/carros', carroController.buscarTodos);
route.get('/carro/:codigo', carroController.buscarUm);

modules.exports = router;
