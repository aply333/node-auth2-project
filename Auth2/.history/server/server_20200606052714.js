const express = require('express');
const server = express();

server.use( express.json());
server.get('/', logger, (req, res) => {
    res.send('At Root')
})


function logger (req, res, next){
    console.log(`[${Date.now()}] ${req.method} at ${req.url}`);
    next();
}


module.exports = server;

