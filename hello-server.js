/*
    hello-server.js

    The most basic web server you can write using Node.js
*/

'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
   res.send('Hello World from Zimney');
});

app.get('/foo', function(req, res) {
   res.send('You requested foo');
});

app.listen(8080, function() {
   console.log('Listening on http://localhost:8080');
});