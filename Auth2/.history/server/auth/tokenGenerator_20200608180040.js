const jwt = require('jsonwebtoken');

module.exports = {
    tokenMake,
    secret
};

const secret = "asuperdoopersecuresecret9999"

function tokenMake(user){
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