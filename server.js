var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/blackout', function (req, res) {
  res.sendFile(__dirname + '/public/arc/blackout-viewer.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});