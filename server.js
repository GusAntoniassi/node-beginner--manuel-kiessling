var http = require('http');
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = '';
        var pathname = url.parse(request.url).pathname;
        console.log('Request para ' + pathname + ' recebido');
        
        request.setEncoding('utf8');

        request.addListener('data', function(postDataChunk) {
            postData += postDataChunk;
            console.log('Recebeu um pedaço do POST: ' + postDataChunk);
        });

        request.addListener('end', function() {
            route(handle, pathname, response, postData);
        });

    }
    
    http.createServer(onRequest).listen(8888);
    console.log('Servidor iniciado');
}

exports.start = start;