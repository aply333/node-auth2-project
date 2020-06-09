const express = require('express');
const db = require('./dbModel');
const router = express.Router();

router
    .route('/users')
    .get((req, res) => {
        db.find()
            .then(users => res.status(200).json(users))
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
    })

module.exports = router;