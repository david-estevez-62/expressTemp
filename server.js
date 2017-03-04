var express = require('express');


var index = require('./routes/index');
var users = require('./routes/users');




var app = express();
app.set('view engine', 'hjs');
app.set('views', __dirname + '/views');


app.use(express.static( __dirname + '/public'));




app.use('/', index);
app.use('/users', users);







var server = app.listen(8080, function() {
	console.log('Express server listening on port ' + server.address().port);
});
