const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

/* GET home page. */
router.get('/', usuariosController.index);

module.exports = router;