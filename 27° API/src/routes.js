const express = require('express'):
const router = express.Route();

const carroController = require('./controllers/carroController');

router.get('/carros', carroController.buscarTodos);
route.get('/carro/:codigo', carroController.buscarUm);
router.post('/carro', carroController.inserir);
router.patch('/carro/:codigo', carroController.update);
router.delete('/carro/:codigo', carroController.delete);

modules.exports = router;
