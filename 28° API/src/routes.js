const express = require('express');
const router = express.Router();

//fazendo requisição na pasta controller
const carroController = require('./controllers/carroControler');

//
router.get('/carros', carroController.buscarTodos);
router.get('/carro/:codigo', carroController.buscarUm);
router.post('/carro', carroController.inserir);
router.patch('/carro/:codigo', carroController.update);
router.delete('/carro/:codigo', carroController.delete);

modules.exports = router;
