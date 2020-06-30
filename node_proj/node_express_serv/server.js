const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

//app.use(cors());

//middleware that is called before each route when it is accessed
app.use("/css", express.static(__dirname + "/public/css")) //attach static css file to routes

//root route with url params and adding a cookie to the response
app.use('/', (req, res, next) => {
    console.log(`someone requested for: ${req.url}`)

    //add a cookie to the route
    res.cookie('cookieName', 'cookieValue');
    //necessary to continue middleware processing to the route get handler
    next();
})
//parser for getting json from request body params
const bodyParse = bodyParser.json();
//parser middleware for query strings
const urlEncodeParser = bodyParser.urlencoded({extended:false})



//Get routes
//get defines the route path and handles requests and responses
app.get(
    '/',
    (req, res) => {
        res.send(`
        <html>
            <head>
                <link type='text/css' rel='stylesheet' href="/css/styles.css">
            </head>
            <body>
                <h1>Jimmy Hendrix Rocks!</h1>
            </body>
    
        </html>
        `);
    }
)

app.get('/addUser', (req,res) => {
    //Open included static file and render it in the response
    let HTML = fs.readFileSync(`${__dirname}/views/addUser.html`)
    //If 'HTML' is passed the html will be returned.  Using template strings allows for executing the file and rendering the html
    res.send(`${HTML}`);
})

app.get('/addQuery', (req,res) => {
    let HTML = fs.readFileSync(`${__dirname}/views/addQuery.html`)
    res.send(`${HTML}`);
})

app.get(
    '/api/user',
    (req, res) => {
        //JSON is automatically parsed in get routes by express
        res.send({
            name: "Tim",
            lastname: "Bob"
        })
    }
)



//Using url parameters at route
app.get(
    '/api/:userName/:id',
    (req, res) => {
        let userId = req.params.id
        let userName = req.params.userName
        //Return html with the param values
        res.send(`
            <html>

                <body>
                    <h1 style="background: light-grey">The user ${userName}'s id is ${userId}</h1>
                </body>
        
            </html>
        `)
    }
)
//Demonstrating using url query strings and returning json
app.get(
    '/api/car',
    (req, res) => {
        //ex url: localhost:3000/api/car?brand=mustang&year=2020
        let brand = req.query.brand;
        let year = req.query.year;
        //Return json with the query strings
        res.send({
            brand,
            year
        })
    }
)

//Post Routes
app.post('/api/addUser', bodyParse, (req, res) =>{
    console.log(req.body);
    

    
    res.sendStatus(200);
})

app.post('/api/addQuery', urlEncodeParser, (req, res) =>{
    //console.log(req.body);

    const firstName = req.body.firstname;
    const lastName = req.body.lastname;

    console.log(firstName, lastName)
    res.sendStatus(200);
})

app.listen(3000);