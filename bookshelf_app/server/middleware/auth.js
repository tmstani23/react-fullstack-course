const {User} = require('../models/user');

//Authenticate user token middleware
let auth = (req, res, next) => {
    //Get the token from browser cookie
    let token = req.cookies.auth;
    //console.log(req.cookies.auth);
    //check if user with token exists in db
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.send(false);
        //If user exists update req with token and user
        req.token = token;
        req.user = user;
        next();
    })
}

module.exports = {auth};