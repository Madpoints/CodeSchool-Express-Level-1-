var express = require('express');
var app = express();

app.get('/', function(request, response) {
   response.send('Hello World');
});

app.get('/name', function(request, response) {
   // Redirecting to relative path , 301 status for permanent move
   response.redirect(301, '/surprise');    
}); 

app.get('/surprise', function(request, response) {
    var name = 'John';
   response.send(name);    
});

app.listen(process.env.PORT, function() {
    console.log("Listening on port " + process.env.PORT);
});