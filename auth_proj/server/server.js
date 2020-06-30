const express = require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3001;
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

mongoose.connect(`mongodb://localhost:27017/AuthApp`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.set('useCreateIndex', true);

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());

//Models
const {User} = require('./models/user');


//Routes

app.get('/api/books', (req, res) => {
    let token = req.cookies.auth;
    //console.log(token);
    User.findByToken(token, (err, user) => {
        if (err) return res.status(400).json({message: 'Bad token'});
        
        if(!user) return res.status(401).send('user with token not found')
        
        res.status(200).send(user);
    })

    
})

//Login user
app.post('/api/user/login', (req, res) => {
    
    //find if user exists
    User.findOne({'email': req.body.email}, (err, user) => {
        
        if(!user) return res.json({message: 'User not found.'})
        
        //Check if input pass matches hashed pass
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) throw err;
            if(isMatch === false) return res.status(400).json({
                message: "Wrong password."
            })
            //Generate the token and add to user
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err)
                //Add the new token as a cookie to the browser
                res.cookie('auth', user.token).send('Cookie ok added')
            })
            
        })
    })
    
    
    
})

//Create a new user with email and password from req body
app.post(`/api/user`, (req, res) => {
    
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    user.save((err, doc) => {
        if(err) res.status(400).send(err);
        res.status(200).send(doc);
    })
})





app.listen(port, () => {
    console.log(`Backend server listening on port ${port}`);
})