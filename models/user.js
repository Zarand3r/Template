//initialize
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  date_created: Date,
});

//Custom method for the schema
userSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude';

  return this.name;
};

//Model the schema
var User = mongoose.model('User', userSchema);

// Make the model available wherever models/user.js is required
module.exports = User;


//Right now, I plan to require/model each schema on a route controller basis. However, alternatively I could use a loop in app.js to initialize all the models in the folder.
//STATIC!!! (schema is merely a definition, not like a class object) like requiring a module
