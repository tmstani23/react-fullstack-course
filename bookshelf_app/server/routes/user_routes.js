const express = require('express');
const router = express.Router();

//Models
const {User} = require('../models/user');
const { json } = require('body-parser');

///Post routes
router.post('/register', (req, res) => {
    console.log('/register route works')
    
    const user = new User(req.body);

    user.save((err, doc) => {
        if(err) return res.json({success: JSON.stringify(err)})

        return res.status(200).json({
            success: true,
            user: doc
        })
    })


});

module.exports = router;

