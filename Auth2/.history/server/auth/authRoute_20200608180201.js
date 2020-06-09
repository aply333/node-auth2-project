const express = require('express');
const bcrypt = require('bcryptjs');
const tokenMake = require('./tokenGenerator');
const db = require('../dbModel')
const router = express.Router();

// REGISTER NEW USER ---

router
    .route('/register')
    .post(async (req, res) => {
        let user  = req.body;
        const hash = bcrypt.hashSync(user.password, 10)
        user.password = hash;
        try{
            const newUser = await db.add(user);
            res.status(201).json(newUser);
        }catch(err){
            console.log(`__CATCH__ : ${err}`);
            res.status(500).json(err);
        }
    });

//LOGIN USER ---

router
    .route('/login')
    .post((req, res) => {
        let { username, password } = req.body;
        db.findBy({username})
            .first()
            .then( user => {
                if( user && bcrypt.compareSync(password, user.password)){
                    const token = tokenMake(user)
                    res.status(200).json({message:`Welcome ${username}`,
                                          token: token,})
                }else{
                    res.status(401).json({message:`Invalid Credentials`})
                }
            })
            .catch( err => { res.status(500).json(err)})
    })    


module.exports = router;


