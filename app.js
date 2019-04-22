var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const allowCors = require('./cors')
var db = require('./db/init');
var index = require('./routes/index');

var app = express();

app.use(allowCors)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', index);

/* eslint-disable */
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log()
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var port = 3003;
app.listen(port, function() {
  console.log(`APP backend rodando na porta ${port}.`)
})

module.exports = app;
