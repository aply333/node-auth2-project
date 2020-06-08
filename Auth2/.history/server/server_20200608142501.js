const express = require('express');
const server = express();
const authRoute = require("./auth/authRoute");

server.use( express.json());

server.use('/api', logger, authRoute);
server.get('/', logger, (req, res) => {
    res.send('At Root')
})


function logger (req, res, next){
    console.log(`[${Date.now()}] ${req.method} at ${req.url}`);
    next();
}


module.exports = server;

