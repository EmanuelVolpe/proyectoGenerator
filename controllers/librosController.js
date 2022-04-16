const conn = require('../connection/connection')
const librosModel = require('../models/librosModel')

module.exports = {

    index: function (req, res) {
        librosModel.obtener(conn, function (err, resultados) {
            if (err)
                console.log('ERROR')
            else {
                console.log(resultados)
                res.render('libros/index', {
                    titulo: 'LIBROS',
                    mensaje: 'TABLA DE LIBROS',
                    libros: resultados
                });
            }
        })
    },

    editar: (req, res) => {
        const id = req.params.id;
        conn.query('SELECT * FROM libros WHERE id=?', id, (error, results) => {
            if (error) {
                throw error;
            } else {
                //console.log('los resultados son:' + results)
                res.render('libros/edicion', {
                    titulo: 'EDICION',
                    mensaje: 'EDITAR LIBRO',
                    libro: results[0]
                });
            }
        });
    },

    update: (req, res) => {
        const id = req.body.id;
        const nombre = req.body.nombre;
        const imagen = req.body.imagen;
        librosModel.actualizar(conn, [{ nombre: nombre, imagen: imagen }, id], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results)
                res.redirect('../libros');
            }
        });
    },

    //REDIRIJO A LA VISTA "CREATE"
    agregar: function (req, res) {
        res.render('libros/agregar', {
            titulo: 'AGREGAR LIBRO',
            mensaje: 'Agregue un libro:'
        })
    },

    guardar: function (req, res) {
        const nombre = req.body.nombre;
        const imagen = req.body.imagen;
        librosModel.insertar(conn, { nombre, imagen }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                //console.log(results);
                //setTimeout(() => res.redirect('/'), 200)
                res.redirect('/libros');
            }
        })
    },

    delete: (req, res) => {
        const id = req.params.id;
        console.log(id)
        //console.log("ID:" + id)
        librosModel.eliminar(conn, id, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                res.redirect('/libros');
            }
        })
    }
}