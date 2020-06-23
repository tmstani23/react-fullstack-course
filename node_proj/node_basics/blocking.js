const fs = require('fs');

//Blocking synchronous
// const data = fs.readFileSync('./hello.txt', 'utf8');
// console.log(data);

// Non blocking async
const data = fs.readFile('./hello.txt', 'utf8', (err, data) => {
    if(err) throw error;
    console.log(data);
});


function showMessage() {
    console.log('finished');
}

showMessage();