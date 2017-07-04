// main server file
var express  = require('express'),
    app      = express();


// database connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');

// Middleware

// Environmental variables, settings
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// load up our routes
require('./routes')(app);

var server = app.listen('port', function() {
  console.log('App started');
});
