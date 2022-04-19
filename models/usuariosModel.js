module.exports = {
    agregar: function (conexion, datos, funcion) {
        conexion.query('INSERT INTO usuarios SET ?', { usuario: datos.usuario, pass: datos.pass }, funcion)
    },
    verificar: function (conexion, datos, funcion) {
        conexion.query('SELECT * FROM usuarios WHERE id = ?', datos, funcion)
    }

    /*
    obtener: function (conexion, funcion) {
        conexion.query('SELECT * FROM usuarios', funcion)
    }
    actualizar: function (conexion, datos, funcion) {
        conexion.query('UPDATE libros SET ? WHERE id = ?', datos, funcion)
    },
    eliminar: function (conexion, datos, funcion) {
        conexion.query('DELETE FROM libros WHERE id = ?', datos, funcion)
    },
    editar: function (conexion, datos, funcion) {
        conexion.query('SELECT * FROM libros WHERE id = ?', datos, funcion)
    } */

}