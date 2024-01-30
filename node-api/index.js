const { log } = require('console');
const http = require('http');
const { hostname } = require('os');

const HOST = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Conten-Type', 'text/plain');
    res.end('Resposta enviada !\n');
});

server.listen(port, HOST, () => {
    
})