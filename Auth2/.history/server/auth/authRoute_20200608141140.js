const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../dbModel')
const router = express.Router();

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
            console.log(err)
            res.status(500).json(err);
        }
    });
