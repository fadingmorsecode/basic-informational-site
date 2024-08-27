const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    let reqURL = req.url.slice(1);
    if (reqURL === '') {
      reqURL = 'index';
    }
    fs.readFile(`${reqURL}.html`, function (err, data) {
      if (err) {
        fs.readFile('404.html', function (err, errdata) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.write(errdata);
          res.end();
        });
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
