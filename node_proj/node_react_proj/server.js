const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const port = process.env.PORT || 3001;

app.get('/api/users', (req, res) => {
    // res.json([
    //     {
    //         id: 1,
    //         username: 'Timothy'
    //     },
    //     {
    //         id: 2,
    //         username: 'Marcus'
    //     },

    // ])
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if(err) {
            return console.log("Could not connect to db")
        }
        console.log(`Connected to mongodb at url: ${url}`);
        
        client.db('Cars').collection('items').insertOne({
            model:"Ford",
            year: 2017
        }, (err, res) => {
            if(err) {
                return console.log(`MONGO_ERROR: ${err}`)
            }
            //console.log(res);
            console.log(res.ops[0]._id)
        })
        setTimeout(() => {
            client.close();
        }, 5000)   
        
        
        
        
    })
})

app.listen(port);