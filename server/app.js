var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var scroll = require('./marquee');
var fruit = require('./fruitStand');

app.set('port', (process.env.PORT || 5000));

app.get('/startMarket', function() {
    response.send(fruit.startMarket());
});

app.get('/startMarket', function() {
    response.send(fruit.updateAll());
});

app.get('/startMarket', function() {
    response.send(fruit.playerInventory());
});

app.get('/startMarket', function() {
    response.send(fruit.Fruit());
});

app.get('/startMarket', function() {
    response.send(fruit.randomNumber());
});

app.get('/startMarket', function() {
    response.send(scroll());
});

app.get('/*', function(request, response) {
    var file = request.params[0] || 'views/index.html';
    response.sendFile(path.join(__dirname, './public', file));
});

app.use(favicon(__dirname + '/public/favicon.ico'));

app.listen(app.get('port'), function() {
    console.log("App is running on port: ", app.get('port'));
});