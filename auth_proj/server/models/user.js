const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_RANDOMNESS = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
    token: {
        type: String,
        required: true
    }
});

//exec function before model is saved to db
userSchema.pre('save', function(next) {
    var user = this;

    //If password property has been modified then run the hash function
        //prevents running the function when a property other than password is changed
    if(user.isModified('password')) {
        bcrypt.genSalt(SALT_RANDOMNESS, function(err, salt){
            if(err) return next(err);
            //hash the user document password before saving to db
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next()
    }

    
})

//compares user password with hashed password
//"methods" attaches the method to the object instance constructor
    //allows for using any time "user" document is called
userSchema.methods.comparePassword = function(candidatePass, callback) {
    var user = this;

    bcrypt.compare(candidatePass, user.password, (err, isMatch) =>{
        if(err) return callback(err);

        callback(null, isMatch);
        
    })
}

//generates and signs token.  attaches to user object
userSchema.methods.generateToken = function(cb) {
    //ref to user document 
    var user = this;
    //create signed token
    let token = jwt.sign(user._id.toHexString(), 'supersecret')
    //set user token to new token
    user.token = token;
    //save and return user
    user.save(function(err, user){
        if(err) return cb(err);
        cb(null, user)
    })
}


//Verify user token
    //"statics" attaches the method to the actual model constructor
    //allows for using any time "User" model is called
userSchema.statics.findByToken = function(token, cb) {
    //ref to user document 
    var user = this;
    //decode token and verify if it matches
    jwt.verify(token, 'supersecret', (err, decodedToken) => {
        if(err) return cb(err);
        //find user by id and return user or error
        user.findOne({'_id': decodedToken, 'token': token}, (err, user) => {
            if(err) return cb(err);
            cb(null, user)
        })
    })
}

console.log(userSchema)

const User = mongoose.model('User', userSchema);

module.exports = { User };

