var express           = require('express'),
    UserController   = express.Router();

//controller functions to be used below in route handling

UserController.route('/:username')
  .get(function(req, res) { //display profile
        res.send("hello" + req.params.username);
        //search database for this username's info
          //recent posts, bio, photos, friends, history, etc.
    })
  .post() //change profile
  .delete();

  module.exports = UserController;
