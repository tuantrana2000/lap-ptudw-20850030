const http = require('http');

const hostName = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Hello world</h1>');
});

server.listen(port, hostName, () => {
    console.log(`Server is running at http://${hostName}:${port}`);
});