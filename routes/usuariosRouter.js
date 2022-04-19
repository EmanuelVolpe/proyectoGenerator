const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.index);
router.get('/registro', usuariosController.registro);
router.post('/agregar', usuariosController.agregar);
router.post('/autentificar', usuariosController.autentificar);

module.exports = router;