const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

router.post('/guardar', librosController.guardar);
router.post('/update', librosController.update);
router.get('/', librosController.index);
router.get('/agregar', librosController.agregar);
router.get('/eliminar/:id', librosController.delete);
router.get('/editar/:id', librosController.editar);

module.exports = router;
