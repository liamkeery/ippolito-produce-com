var express = require('express')
var app = express()
var path = require('path');

app.set('port', (process.env.PORT || 5000))
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
//app.use('/bower_components', express.static(__dirname + '/bower_components'))
app.use('/', express.static(__dirname + '/'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
})


