const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenSecret = require('./tokenSecret');

module.exports = tokenValidator;

function tokenValidator (req, res, next){
    const token = req.headers.authorization;
    
    if(token){
        jwt.verify(token, secret,)
    }
}