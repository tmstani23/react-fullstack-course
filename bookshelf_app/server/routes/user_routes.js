const express = require('express');
const router = express.Router();


//Middleware
const {auth} = require('../middleware/auth');

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

router.get('/all_users', (req, res) => {
        console.log('all_users working')
        //ex url: api/users/all_users
        
        //find book in db by id and return its document if found

        User
            .find()
            // populate goes to another collection (users) and includes all that user's data in the response
            .exec((err, doc) => {
                if(err) return res.status(400).send(err);
                res.send(doc)
            })
    })



//User login route
router.post('/login', (req, res) => {
    console.log('/login route works')
    
    User.findOne({'email': req.body.email}, (err, user) => {
        if (!user) {
            return res.json({
                auth: false,
                message: 'Auth failed, email not found',
                userData: false
            })
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(err) return res.json({message: err});
            //if password doesnt match return error
            if (!isMatch) {
                return res.json({
                    auth: false,
                    message: 'Wrong password',
                    userData: false
                })
            }
            //generate user token
            user.genToken((err, user) => {
                if(err) return res.status(400).send(err)
                //store token as cookie in browser
                res.cookie('auth', user.token).json({
                    auth: true,
                    userData: {
                        id: user._id,
                        email: user.email,
                        name: user.name,
                        lastname: user.lastname
                    }
                })
            })

        })
    })
    

});

//Get routes
//Returns positive authentication and user data
router.get('/auth', auth, (req, res) => {
    
    res.json({
        auth:true,
        userData: {
            id: req.user._id,
            email: req.user.email,
            name: req.user.name,
            lastname: req.user.lastname
        }
    })
})
//deletes the token effectively logging the user out
router.get('/logout', auth, (req, res) => {
    req.user.deleteToken(req.token, (err, user) => {
        if(err) return res.status(400).send(err)
        res.status(200).send('User logged out.')
    })
 })

module.exports = router;

