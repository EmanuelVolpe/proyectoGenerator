
module.exports = {
    obtener: function (conexion, datos, funcion) {
        conexion.query('SELECT * FROM libros', datos, funcion)
    },
    insertar: function (conexion, datos, funcion) {
        conexion.query('INSERT INTO libros SET ?', { nombre: datos.nombre, imagen: datos.imagen }, funcion)
    },
    actualizar: function (conexion, datos, funcion) {
        conexion.query('UPDATE libros SET ? WHERE id = ?', datos, funcion)
    },
    eliminar: function (conexion, datos, funcion) {
        conexion.query('DELETE FROM libros WHERE id = ?', datos, funcion)
    },
    editar: function (conexion, datos, funcion) {
        conexion.query('SELECT * FROM libros WHERE id = ?', datos, funcion)
    }

}