var querystring = require('querystring'),
    fs = require('fs');

function start(response, postData) {
    console.log('Request handler "start" foi chamado');
    
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="file" name="Upload" />' +
        '<input type="submit" value="Enviar" />' +
        '</form>' +
        '</body>' +
        '</html>';
    
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(body);
        response.end();
}
    
function upload(response, postData) {
    console.log('Request handler "upload" foi chamado');
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Recebido: ' + querystring.parse(postData).text);
    response.end();
}

function show(response, postData) {
    console.log('Request handler "show" foi chamado');
    fs.readFile('urutau.png', 'binary', function(err, file) {
        if (err) {
            response.writeHead(500, {'ContentType': 'text/plain'});
            response.write(err + '\n');
            response.end();
        } else {
            response.writeHead(200, {'ContentType': 'image/png'});
            response.write(file, 'binary');
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;