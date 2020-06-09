const jwt = require('jsonwebtoken');
const tokenSecret = require('./tokenSecret');



function tokenValidator (req, res, next){
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, tokenSecret.jwt_secret, (err, decodedToken)=>{
            if(err){
                res.status(401).json({message: "Failed to be Verified"})
            }else{
                req.decodedToken = decodedToken;
                next();
            }
        })
    }else{
        res.status(401).json({message: "Failed to Authorize"})
    }
}
module.exports = tokenValidator;