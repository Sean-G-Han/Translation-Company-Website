const http = require('http');

http.createServer(dataControl).listen(4500);

function dataControl(req, res) {
    res.write("<h1>Tan Yi Han</h1>");
    res.end();
}