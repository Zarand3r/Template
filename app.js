//Initialize
var express = require('express');
var app = express();

//Mongodb databse connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
}); 

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
app.use(express.static('public'));

//Load routes
require('./routes')(app);

//Start server
var server = app.listen(app.get('port'), function() {
  console.log('App started');
});

//Socket.io
var io = require('socket.io').listen(server);
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

/**
//Native Mongodb driver. I decided to use Mongoose instead because it is ORM, ability to define collection schemas that determine the structure of documents
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/db1';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});
**/
