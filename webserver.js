var server = require('express')();
var config = require('./config.json');

server.get('/', function(request, response){
    response.sendFile(__dirname + '/public/index.html');
});
server.get('/poradniki', function(request, response){
    response.sendFile(__dirname + '/public/poradniki.html');
});
server.get('/forum', function(request, response){
    response.sendFile(__dirname + '/public/forum.html');
});
server.get('/pobieranie', function(request, response){
    response.sendFile(__dirname + '/public/pobieranie.html');
});

server.listen(config.port);
console.log('Server started on port:' , config.port)