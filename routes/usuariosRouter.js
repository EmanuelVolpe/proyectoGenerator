const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.index);
router.get('/registro', usuariosController.registro);
router.post('/agregar', usuariosController.agregar);
//router.post('verificar', usuariosController, verificar);

module.exports = router;