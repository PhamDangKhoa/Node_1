const http = require('http');

http.createServer(function(req, res) {
    res.end('Xin chao cac ban');
}).listen(3000, () => console.log('server is running'));
