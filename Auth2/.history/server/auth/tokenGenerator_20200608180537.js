const jwt = require('jsonwebtoken');
const secret = require('./tokenSecret');

module.exports = tokenMake;

function tokenMake(user){
    const secret = secret
    const payload = {
        subject: user.id,
        username: user.username
    }
    const secret = secret;
    const options = {
        expiresIn: '1h',
    }
    return jwt.sign(payload, secret, options)
}