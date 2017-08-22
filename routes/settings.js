var express           = require('express'),
    UsersController   = express.Router();

//Settings page has tabs with links to settings/account, settings/password, settings/privacy, etc. Settings/general is default page

SettingsController.route('/') //setttings page
  .get(/*...*/) //display settings
  .post(/*...*/) //change settings

SettingsController.route('/general') //same as .route('/')
  .get(/*...*/) 
  .post(/*...*/)

SettingsController.route('/account')
  .get(/*...*/)
  .post(/*...*/)

SettingsController.route('/password')
  .get(/*...*/)
  .post(/*...*/)

SettingsController.route('/privacy')
  .get(/*...*/)
  .post(/*...*/)

  module.exports = UsersController;
