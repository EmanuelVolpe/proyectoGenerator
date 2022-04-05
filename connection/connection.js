const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyectogenerator'
});

connection.connect((err) => {
    if (!err)
        console.log('Conexion establecida con exito')
    else
        console.log('Error en la conexion')
})

//connection.end()

module.exports = connection;