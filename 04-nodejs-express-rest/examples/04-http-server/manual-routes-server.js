const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/tasks') {
    res.end('Here is the list of tasks');
  } else if (req.method === 'POST' && req.url === '/tasks') {
    res.end('A new task was created');
  } else if (req.method === 'DELETE' && req.url === '/tasks') {
    res.end('A task was deleted');
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
