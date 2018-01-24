import http = require('http');

console.log("Open page 'http://localhost:3000/' in your browser");

http.createServer((request, response) => {
    response.write('Hello from Node.js!');
    response.end();
}).listen(3000);