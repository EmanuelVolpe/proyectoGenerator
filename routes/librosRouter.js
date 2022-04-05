const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

/* GET home page. */
router.get('/', librosController.index);
router.get('/agregar', librosController.agregar);
router.post('/', librosController.guardar)

module.exports = router;
