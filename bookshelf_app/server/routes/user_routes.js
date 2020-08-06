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
        if(err) {
            console.log(JSON.stringify(err));
            return res.json(
                {
                    success: false, 
                    error: err
                
                })
            
        }

        return res.status(200).json({
            success: true,
            user: doc,
        })
    })
});

router.post('/delete_user', (req, res) => {
    console.log('/delete_user route works')
    const email = req.body.email;
    const currentUserRole = req.body.loggedInUserRole;
    //check if current user is administrator if not return an error 
    if(currentUserRole !== 1) {
        return res.json({error: 'Only administrators can delete users.'})
    } 

    User.findOneAndRemove({'email': email}, (err, user) => {
        if(!user) {
            return res.json({error: 'No user found'})
        }
        
        if(err) return res.status(400).json({error: err.message})
        
        
            return res.status(200).json({
                success: true,
                email,
                error: ''
            })
        
        
    });
    
        
       
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
    //Find the user by email in the db
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
                        lastname: user.lastname,
                        role: user.role
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
            lastname: req.user.lastname,
            role: req.user.role,
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

