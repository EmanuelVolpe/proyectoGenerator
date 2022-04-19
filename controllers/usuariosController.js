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
    autentificar: async function (req, res) {
        const usuario = req.body.usuario;
        const pass = req.body.pass;
        //console.log(`usuario: ${usuario}, pass: ${pass}`)
        //res.render('usuarios/es')
        let passHaash = await bcryptjs.hash(pass, 8);
        if (usuario && pass) {
            usuariosModel.autentificar(conn, usuario, async (error, results) => {
                if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))) {
                    console.log(pass, results[0].pass)
                    res.render('usuarios/login', {
                        alert: true,
                        alertTitle: 'ERROR',
                        alertMessage: '¡Usuario Incorrecto!',
                        alertIcon: 'error',
                        showConfirmButton: false,
                        timer: 2000,
                        ruta: 'usuarios'
                    })
                } else {
                    //console.log(pass, results[0].pass)
                    res.render('usuarios/login', {
                        alert: true,
                        alertTitle: 'EXITO',
                        alertMessage: '¡Usuario CORRECTO!',
                        alertIcon: 'success',
                        showConfirmButton: false,
                        timer: 2000,
                        ruta: '../libros'
                    })
                }
            })
        } else {
            res.render('usuarios/login', {
                alert: true,
                alertTitle: 'ADVERTENCIA',
                alertMessage: '¡Por favor, ingrese un usuario y/o contraseña valido/a!',
                alertIcon: 'warning',
                showConfirmButton: false,
                timer: 4000,
                ruta: 'usuarios'
            })
        }
    }
}
