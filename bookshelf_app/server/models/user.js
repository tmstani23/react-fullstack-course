const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config').get(process.env.NODE_ENV);
const SALT_GENERATIONS = 10;

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength:6
    },
    name: {
        type: String,
        maxlength: 100
    },
    lastname: {
        type: String,
        maxlength: 100
    },
    role: {
        type: Number,
        default: 0,
    },
    token: {
        type: String,
        
    }

})

//Run pre middleware before userSchema is accessed
userSchema.pre('save', function (next) {
    var user = this;
    //if the password property has already been modified
    if(user.isModified('password')) {
        //generate the salt 
        bcrypt.genSalt(SALT_GENERATIONS, function (err, salt) {
            if(err) return next(err);
            // hash the password
            bcrypt.hash(user.password, salt, function (err, hash) {
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

//Compare input password with user pass in db
userSchema.methods.comparePassword = function(candidatePass, cb){
    var user = this;
    bcrypt.compare(candidatePass, user.password, function(err, isMatch){
        if(err) return cb(err);
        //isMatch returns boolean depending on the result of password compare
        cb(null, isMatch);
    })
}

//Compare input password with user pass in db
userSchema.methods.genToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(), config.SECRET);

    //Add new token to user doc and save
    user.token = token;
    user.save(function(err, user){
        if(err) return cb(err);
        cb(null, user);
    })
}

userSchema.statics.findByToken = function (token, cb) {
    var user = this;

    //decode the token using the secret and check if a user has the token
    jwt.verify(token, config.SECRET, function(err, decode) {
        user.findOne({'_id': decode, 'token': token}, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })
}

//method that deletes the token from user
userSchema.methods.deleteToken = function(token, cb){
    var user = this;
    
    user.updateOne({
        $unset: {
            token: 1
        }
    }, function(err) {
        if(err) return cb(err);
            
        cb(null, user);
    })
    
}
const User = mongoose.model("User", userSchema);

module.exports = {User};