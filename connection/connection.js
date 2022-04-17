const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if (!err)
        console.log('Conexion establecida con exito')
    else
        console.log('Error en la conexion')
})

//connection.end()

module.exports = connection;