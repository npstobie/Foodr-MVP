var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 3000,
    foodController = require('./server/controllers/food-controller.js');


mongoose.connect('mongodb://localhost:27017/foodr-mvp');

app.use(bodyParser());

app.use(express.static(__dirname + '/client/views'));

app.use(express.static(__dirname + '/client/views/description'));

app.use(express.static(__dirname + '/client/views/swipes'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.get('/api/food', foodController.list);

app.listen(port, function() {
  console.log('Listening on port ' + port);
});