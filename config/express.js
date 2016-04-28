/*
 * config express
 */
var express = require('express')
  , compression = require('compression')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , path = require('path')
  , multer = require('multer')
  , addRequestId = require('express-request-id')()
  , session = require('express-session')


module.exports = function (app, config, passport) {
  app.use(addRequestId);
  app.use(compression({
    threshold: 1024
  }));
  app.use(express.static(config.root + '/public'));

  // set views path, template engine and default layout
  // app.set('views', config.root + '/app/views');
  // app.set('view engine', 'ejs');

  app.use(bodyParser.json({limit: '5mb'}));
  app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));
  app.use(bodyParser.json({type: 'application/vnd.api+json',limit: '5mb'}));

  app.use(cookieParser());
  app.use(methodOverride());
  require('./routes')(app);

  /// error handlers

    /// catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
      /// error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.json({message: err.message});
            // res.render('error', {
          //      message: err.message,
          //      error: err
            // });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
    // assume "not found" in the error msgs
    // is a 404. this is somewhat silly, but
    // valid, you can do whatever you like, set
    // properties, use instanceof etc.
    app.use(function(err, req, res, next){
      // treat as 404
      if (~err.message.indexOf('not found')) return next()

      // log it
      console.error(err.stack)

      // error page
      req.session = null; // do not setup a session cookie on 500
      res.status(500);
      if( req.path.indexOf('/api') != 0 )
          render('500', { error: err.stack })
    })

    // assume 404 since no middleware responded
    app.use(function(req, res, next){
      req.session = null; // do not setup a session cookie on 404
      res.status(404).render('404', { url: req.originalUrl })
    })


};
module.exports.express = express;
