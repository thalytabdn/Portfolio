var test = require('./custom_event'); // Calls for custom_event.js (same folder)
var greet = require('./greetings');
var http = require('http');
var url = require('url');
var querystring = require('querystring');

greet.sayHello();

var server = http.createServer(function (req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    var page = url.parse(req.url).pathname;
    console.log(page); // for log in the server

    res.writeHead(200, {
        "Content-Type": "text/html"
    }); // Saying 200 it's ok the page exist

    if (page == '/') {
        res.write('<!DOCTYPE html>' +
            '<html>' +
            ' <head>' +
            ' <meta charset="utf-8" />' +
            ' <title>My Node.js page!</title>' +
            ' </head>' +
            ' <body>' +
            ' <h1> Hello World </h1>' +
            ' <p>Here is a paragraph of <strong>HTML</strong>!</p>' );
        
        // http://localhost:3000/?firstname=John&lastname=Doe
        if ('firstname' in params && 'lastname' in params) {
            res.write('<p>Your name is ' + params['firstname'] + ' ' + params['lastname'] + '</p>');
        } else {
            res.write('<p>You do have a first name and a last name, don\'t you?</p>');
        }
        
        res.write(' </body>' +
                  '</html>');
        res.end();
    } else if (page == '/index') {
        res.write('You\'re in the index page, there is nothing to see');
    } else if (page == '/super/secret') {
        res.write('Hey, this is a private area!');
    }
});

server.on('request', function(req, res) { 
    console.log('server is on, req: ' + req + ', res: ' + req);
});

server.on('close', function() { // We listened to the close event
    console.log('The server closed');  // say goodbye when the server is closed
    greet.sayGoodbye();
})

server.listen(3000); // will be on localhost:3000

// server.close(); // Stops the server. Triggers the close event
