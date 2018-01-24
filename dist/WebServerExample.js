"use strict";
exports.__esModule = true;
var http = require("http");
http.createServer(function (request, response) {
    response.write('Hello from Node.js!');
    response.end();
}).listen(3000);
