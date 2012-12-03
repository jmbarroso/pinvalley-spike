var express = require('express');

var app = express();

var allowCrossDomain = function (req, res, next) {
    res.header('Content-Type', 'application/json');
    res.header('Cache-Control', 'no-cache');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    next();
};

app.configure(function() {
    app.use(allowCrossDomain);
});

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


app.post('/pin/', function(request, response) {
	
	console.log(request.body);

	response.end();    

});



app.listen(8080);
