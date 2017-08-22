var express           = require('express'),
    UsersController   = express.Router();

//controller functions to be used below in route handling

UsersController.route('/:username')
  .get(function(req, res) { //display profile
        res.send("hello" + req.params.username);
    })
  .post() //change profile
  .delete();

  module.exports = UsersController;
