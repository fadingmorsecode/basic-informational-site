const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    let { url } = req;
    url = url.slice(1);
    if (url === '') {
      url = 'index';
    }
    fs.readFile(`${url}.html`, function (err, data) {
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
