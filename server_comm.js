var http = require("http");

var serverNicePort = 7000;
var serverMeanPort = 7500;

function handleRequestNice(request, response){
    response.end("You are beautful, but need to add functionality! Path hit: " + request.url);
}

function handleRequestMean(request, response){
    response.end("I hate your guts, you should die in a fire. Now add functionality! Path hit: " + request.url);
}

var serverNice = http.createServer(handleRequestNice);

serverNice.listen(serverNicePort, function(){
    console.log(`Server listening on http://localhost:${serverNicePort}`);
});


var serverMean = http.createServer(handleRequestMean);

serverMean.listen(serverMeanPort, function(){
    console.log(`Server listening on http://localhost:${serverMeanPort}`);
});


