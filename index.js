const http = require('http');
const fs = require('fs');

const port = 3003;

const server = http.createServer((request, response) => {
  fs.readFile('index.html', (error, data) => {
    if (error) {
      response.write('Something went wrong');
    } else {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.write(data);
    }
    response.end();
  });
});

server.listen(port);
