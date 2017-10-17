const http = require('http');
const url = require('url');
const querystring = require('querystring');

const Server = http.createServer();

Server.on('request', (req, res) => {
    // lay duong dan url tren browser
    var duong_dan = req.url;

    // tach duong dan tren browser ra duong dan bien1, bien2
    var duong_dan_parse = url.parse(duong_dan);

    // tach tung bien ra trong chuoi bien1,bien2
    var param = querystring.parse(duong_dan_parse.query)
    
    var tong = +param.bien1 + +param.bien2;

    res.end(tong + '');
});

Server.listen(3000, () => console.log('server is running'))
