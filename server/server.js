var express = require('express');

var app = express();

app.get('/hello', function(request, response) {
    var output = {
        message: "Hello world"
    };
    response.end(JSON.stringify(output));
});

app.listen(8080);
