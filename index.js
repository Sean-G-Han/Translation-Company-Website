const http = require('http');

http.createServer(dataControl).listen(4500);

function dataControl(req, res) {
    res.write("<h1>Hi I am Tan Yi Han</h1>");
    res.write("<h1>Hi I this is still Yi Han</h1>");
    res.end();
}
