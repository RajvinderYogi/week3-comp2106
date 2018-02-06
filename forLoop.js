let http = require('http');

http.createServer(function (require, res) {
    res.writeHead(200, { 'Content-Type': 'text-plain' });

    for (let i = 1; i<20; i++) {
        res.write(i + '\n');

        console.log(i);
    }

    res.end();

}).listen(3000);