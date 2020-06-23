const os = require('os');
const fs = require('fs');
const userData = require('./user.js');

let user = os.userInfo();
let date = new Date();
let message = `User "${userData.user.name} ${userData.user.lastname}" started APP at ${date} WRITE`


//console.log(user);

if(userData.addLog()) {
    fs.appendFile('hello.txt', message, (err) => {
        if(err) {
            console.log(
                'not able to append'
            )
        }
    })
}



console.log(userData);

