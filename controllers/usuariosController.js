const conn = require('../connection/connection')
const usuariosModel = require('../models/usuariosModel')
const bcryptjs = require('bcryptjs')


module.exports = {
    index: function (req, res) {
        res.render('usuarios/login')
    },
    registro: function (req, res) {
        res.render('usuarios/registro')
    },
    agregar: async function (req, res) {
        const usuario = req.body.usuario;
        const pass = req.body.pass;
        let passHaash = await bcryptjs.hash(pass, 8);
        usuariosModel.agregar(conn, { usuario: usuario, pass: passHaash }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.render('usuarios/registro', {
                    alert: true,
                    alertTitle: 'REGISTRO',
                    alertMessage: '¡Usuario Registrado con éxito',
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 4000,
                    ruta: ''
                })
            }
        })
    },
    /* verificar: function (req, res) {
        const usuario = req.body.usuario;
        const pass = req.body.pass;
        usuariosModel.verificar(conn, { usuario, pass }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.render('libros/index')
            }
        })
    } */


}
