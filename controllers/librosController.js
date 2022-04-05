const conn = require('../connection/connection')
const libroModel = require('../models/librosModel')

module.exports = {

    index: function (req, res) {
        libroModel.obtener(conn, function (err, resultados) {
            if (err)
                console.log('ERROR')
            else {
                console.log(resultados)
                res.render('libros', {
                    titulo: 'LIBROS',
                    mensaje: 'TABLA DE LIBROS',
                    libros: resultados
                });
            }
        })
    },

    agregar: function (req, res) {
        res.render('libros/agregar', {
            titulo: 'AGREGAR LIBRO',
            mensaje: 'Agregue un libro:'
        })
    },

    guardar: function (req, res) {
        console.log(req.body)
        libroModel.insertar(conn, req.body, function (err, resultados) {
            res.redirect('libros')
        })
    }
}