var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');

//app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
//app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.favicon(path.join(__dirname, 'public','images','favicon.ico')));

app.set('port', (process.env.PORT || 5000));

app.get('/*', function(request, response) {
    var file = request.params[0] || 'views/index.html';
    response.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function() {
    console.log("App is running on port: ", app.get('port'));
});