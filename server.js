var express = require('express'),
    app = express();
    port = 3000;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use(express.static(__dirname + '/client'));

app.use(express.static(__dirname + '/client/views/description'));

app.use(express.static(__dirname + '/client/views/swipes'));


app.listen(port, function() {
  console.log('Listening on port ' + port);
});