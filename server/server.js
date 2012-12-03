var express = require('express'),
    http = require('http');

var app = express.createServer();

app.get('/hello', function(request, response) {
    var output = {
        message: "Hello world"
    };
    response.end(JSON.stringify(output));
});

app.listen(8080);