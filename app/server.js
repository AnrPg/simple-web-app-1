// REQUIREMENTS SATISFACTION
const http = require('http')
const https = require('https')
const express = require('express')
const path = require('path')

// CONSTANTS
const HOSTNAME = '0.0.0.0'
const PORT = 8000
// const PORT_H = 8001

// APP SERVERS
const exp_server = express()
exp_server.use(express.static(path.join(__dirname, '/src/static')))

// const http_server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World from https server\n');
// }, exp_server)

// PORT BINDINGS
exp_server.listen(port=PORT, hostname=HOSTNAME, (req, res) => {
  console.log(`Express server listening on: http://${HOSTNAME}:${PORT}`)
})

// http_server.listen(port=PORT_H, hostname=HOSTNAME, (req, res) => {
//   console.log(`Http server is listening on http://${HOSTNAME}:${PORT_H}`)
// })

// ROUTING
exp_server.get('/', (req, res) => {
  res.sendFile('/src/static/html/home.html', {root: __dirname })
})

// "redis": "3.1.2"

/* const express = require('express');
const redis = require('redis');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Total number of visits until now is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
    // res.send('Hi, there!');
})

app.listen(PORT, HOST, () => {
    console.log("listening on " + HOST + ":" + PORT);
}); */