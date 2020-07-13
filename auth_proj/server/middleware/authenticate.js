const {User} = require('../models/user');

//check if token is valid for user
let authenticate = (req, res, next) => {
    let token = req.cookies.auth;

    User.findByToken(token, (err, user) => {
        if (err) return res.status(400).json({message: 'Bad token'});
        
        if(!user) return res.status(401).send('user with token not found')
        
        //Add user and token to request object for use later
        req.user = user;
        req.token = token;
        next();
    })
}

module.exports = {authenticate};