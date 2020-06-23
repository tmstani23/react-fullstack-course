const http = require('http');
const fs = require('fs');

const names = ['Merlin', 'Tim', 'Elon'];
const cars = {
    name: "Ford",
    model: "Mustang"
}
const jsonData = {
    names,
    cars
}


let HTML = fs.readFileSync(`${__dirname}/index.html`);

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    

    res.end(JSON.stringify(jsonData));
    
    // //write the response status and data type to response header
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // //send the response message
    // res.end(HTML)
})


server.listen(8181, '127.0.0.1') //listen on port 8181 of local host
console.log("server is listening on port 8181");