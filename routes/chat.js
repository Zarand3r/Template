//THIS IS AN EXPERIMENTAL FEATURE
var express           = require('express'),
    ChatController   = express.Router();

ChatController.route('/')
  .get(function(req,res){
    res.send("hello");
  })

module.exports = ChatController;
