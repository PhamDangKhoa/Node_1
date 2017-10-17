const http = require('http');
const url = require('url');
const querystring = require('querystring');

const Server = http.createServer();

Server.on('request', (req, res) => {
    var duong_dan = req.url;

    var duong_dan_parse = url.parse(duong_dan);

    var param = querystring.parse(duong_dan_parse.query)
    
    var tong = +param.bien1 + +param.bien2;

    res.end(tong + '');
});

Server.listen(3000, () => console.log('server is running'))
