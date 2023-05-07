const http = require('http');
const server = http.createServer(function (request, response) {
    console.log(request);
    if(request.url ==='/'){
        response.write('Welcome to home of learning nodejs')
    }
    else if(request.url ==='/about'){
        response.write('This is all about learning node js')
    }
    else{
        response.write('Oops! There is nothing like that.')
    }
    response.end()
})

server.listen(8081);

console.log('Server running at http://127.0.0.1:8081/');