var server = require('express')();
var config = require('./config.json');





const parseIp = (request) =>
       request.headers['x-forwarded-for']?.split(',').shift()
    || request.socket?.remoteAddress


    server.get('/', function(request, response){
    console.log(parseIp(request), '- Got the session')
    response.sendFile(__dirname + '/public/index.html');
});


server.listen(config.port)
console.log('Server started on port:' , config.port)