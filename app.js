/**
* Global variables
*/
global.__base = __dirname + '/'
bunyan = require('bunyan');
log = bunyan.createLogger({
	name: 'mfe_webservices',
	streams: [{
		stream: process.stdout ,
		level: 'trace'
	}]
});

/**
* npm modules
*/
var express = require('express');
var bodyParser = require('body-parser')
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors  = require('cors');

var app = express();

/**
* Export variables
*/
module.exports.app = app

/**
* Express configuration
*/
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
	.use(bodyParser.json())
	.use(cookieParser())
	.use(session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true
	}))
	.use(cors());
	
app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'))
})


/**
* Local modules
*/
var route = require('./services/route/routes.js')
