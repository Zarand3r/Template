//Initialize
var express = require('express');
var app = express();

//database connection
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/mydb');

//Environmental variables, settings
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Universal middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Load routes
require('./routes')(app);

//Start server
var server = app.listen(app.get('port'), function() {
  console.log('App started');
});

//Socket.io
/**
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  ...
});
**/
