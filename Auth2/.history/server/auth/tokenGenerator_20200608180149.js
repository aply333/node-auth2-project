const jwt = require('jsonwebtoken');

module.exports = {
    tokenMake,
    secret
};


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
const secret = "asuperdoopersecuresecret9999"
