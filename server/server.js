var express = require('express');

var app = express();

app.get('/hello', function(request, response) {
    var output = {
        message: "Hello world"
    };
    response.end(JSON.stringify(output));
});

app.get('/pin/:pinId', function(request, response) {
    var pin = {
        id: request.params.pinId,
        name: 'Mi startup',
        latitude: 26,
        longitude: -17
    };
    response.end(JSON.stringify(pin));
});

app.listen(8080);
