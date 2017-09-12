function route(handle, pathname, response, postData) {
    console.log('Vou rotear um request para ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        console.log('Nenhum request handler para ' + pathname + ' foi encontrado');
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('404 - Não encontrado');
        response.end();
    }
}

exports.route = route;