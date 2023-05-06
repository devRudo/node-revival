// const fs = require('fs')

// for(let i=0;i<=100000;i++){
//     fs.writeFileSync(`./data/big-file.txt`, `Hello World ${i+1}\n`, {flag: 'a'})
// }

// const {createReadStream} = require('fs');

// const stream = createReadStream('./data/big-file.txt', {
//     highWaterMark: 90000,
//     encoding: 'utf8'
// })

// stream.on('data', (result) => {
//     console.log(result)
// })

// stream.on('error', (err)=>{
//     console.log(err);
// })

var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
    // const text = fs.readFileSync('./data/big-file.txt', 'utf8');
    // response.end(text);
    const fileStream = fs.createReadStream('./data/big-file.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(response)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');