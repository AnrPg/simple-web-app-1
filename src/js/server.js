const express = require('express');
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
        res.send('Number of visits until now is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
    // res.send('Hi, there!');
})

app.listen(PORT, HOST, () => {
    console.log("listening on " + HOST + ":" + PORT);
});

/*
'use strict';

const express = require('express');
const express = require('redis');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
*/