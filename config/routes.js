var index = require('../app/controllers/index');


module.exports = function (app, passport) {
  app.get('/', index.home);
  app.get('/contact-1.html', index.contactUs);

};