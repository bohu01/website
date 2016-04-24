/**
 * GCDS System API server.
 * -Bo Hu
 * 06/27/2014
 */

var env = process.env.NODE_ENV || 'development';

/**
 * Module dependencies.
 */
var express = require('express');

//config app, env, db, root
config = require('./config/config')[env];

//console.log(config.root);
var app = express();
app.set('env', env);
require('./config/express')(app, config);
require('./config/routes')(app);

module.exports = app;