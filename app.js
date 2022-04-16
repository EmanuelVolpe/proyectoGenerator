const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
//const app = express();
const port = process.env.PORT || 5000;

const indexRouter = require('./routes/indexRouter');
const librosRouter = require('./routes/librosRouter');
//const usuariosRouter = require('./routes/usuarios');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/libros', librosRouter);
//app.use('/usuarios', usuariosRouter);

app.listen(port, () => {
  console.log(`SERVER corriendo en http://localhost:${port}`);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('./layouts/error');
});

module.exports = app;
