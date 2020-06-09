const jwt = require('jsonwebtoken');

module.exports = tokenMake;

function tokenMake(user){
    const payload = {
        subject: user.id,
        username: user.username
    }
    const secret = 'asuperdoopersecuresecret9999';
    const options = {
        expiresIn: '1h',
    }
    return jwt.sign(payload, secret, options)
}