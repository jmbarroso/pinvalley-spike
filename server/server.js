var express = require('express'),
    mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/pinvalley-spike-database');

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
    app.use(express.bodyParser());
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

app.get('/pin', function(request, response) {
    var pins = [
        { id : 4, name : 'startup 4' },
        { id : 6, name : 'startup 6' },
        { id : 7, name : 'startup 7' },
        { id : 8, name : 'startup 8' },
        { id : 4, name : 'startup 4' }
    ];
    response.end(JSON.stringify(pins));
});

var Pin = new mongoose.Schema({
    name: { type: String, required: true },
    latitude: { type: Number, required: true},
    longitude: { type: Number, required: true}
});

var PinModel = mongoose.model('Pin', Pin);

app.post('/pin', function(request, response) {
    console.log("POST: " + request.body);

    var pin = new PinModel({
        name: request.body.name,
        latitude: request.body.latitude,
        longitude: request.body.longitude
    });
    pin.save(function(err) {
        if (!err) {
            return console.log("created pin");
        } else {
            return console.log(err);
        }
    });

	return response.send(pin);
});

app.options('/pin', function(request, response){
    response.end();
});

app.listen(8080);
