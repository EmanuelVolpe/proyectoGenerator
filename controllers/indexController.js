module.exports = {
    index: function (req, res) {
        res.render('index', {
            titulo: 'INDEX',
            mensaje: 'SOY LA PANTALLA DE BIENVENIDA',
        })
    }
}
