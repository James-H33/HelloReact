var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var portIP = process.env.IP;

app.use(express.static('public'));

app.listen(port, portIP, function() {
  console.log('Express server is running on ' + port);
})
