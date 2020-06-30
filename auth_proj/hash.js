const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//Generate random hash string
    //first arg = amnt of times a random result is generated
// bcrypt.genSalt(10, (err, salt) => {
//     if(err) return next(err);
//     //Salt is a random generated string
//     //console.log(salt)
//     //hash function concatenates the salt string and the hashed password string
//     bcrypt.hash('pass123', salt, (err, hash) => {
//         console.log(hash)
//     })
// })

//secret password stored on server side known only to server admin
const secret = "supersecret";
const secretSalt = "asdkfjasdlfjka.sdjf32423sa";

let id = '100';
//token like a badge that can be passed around and assumes password is validated
//token cannot be signed or decoded without the secret password
const token = jwt.sign(id, secret);
const decodedToken = jwt.verify(token, secret);


console.log(token);