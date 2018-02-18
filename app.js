const express = require('express');
const path = require('path');
const http=require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const index = require('./api/routes/index');
const users = require('./api/routes/users');
const tasks = require('./api/routes/tasks');
const mustacheExpress = require('mustache-express');
const port =  process.env.PORT || 3001;
const app = express();

// connect to mongoose
mongoose.connect('mongodb://127.0.0.1:27017');

// port config
app.set('port', port);

// render index.mustache
app.get('/', function(req, res){
    res.render('index', { });
});

const mustacheExpressObj = mustacheExpress();
mustacheExpressObj.cache = null;

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpressObj);

// mustache is a template engine for express
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Api  Routes
app.use('/', index);
app.use('/users', users);
app.use('/tasks', tasks);


// catch 404 and forward to error handler
app.use(function(req, res, next) {

  // when dosent any routers match in routes in my api
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// middleware to error handler
app.use(function(err, req, res, next) {

// these function to handle all kinds of Error
res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({

      // to send json message
      message: err.message

  });

});

app.listen(app.get('port'));

module.exports = app;
