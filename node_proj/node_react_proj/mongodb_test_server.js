const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const port = process.env.PORT || 3001;

const cars = [
    {model: "Chevy", year: 2017},
    {model: "Nissan", year: 2020},
]


app.get('/api/users', (req, res) => {
    
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if(err) {
            return console.log("Could not connect to db")
        }
        console.log(`Connected to mongodb at url: ${url}`);
        
        // mongo insert allows inserting one obj or an array of many into the db
        // client.db('Cars').collection('items').insert(cars, (err, res) => {
        //     if(err) {
        //         return console.log(`Mongo Error: ${err}`)
        //     }
        //     console.log(res)
        // })

        //Demonstrating mongo find method 
        //find returns a pointer to the items collection
        //toArray must be used to access the data from find
        client.db('Cars')
        .collection('items')
        .find()
        .limit(1)
        .skip(1)
        .toArray()
        .then(
            data => {
                console.log(data);
            }
        )
  
        setTimeout(() => {
          client.close();
        }, 5000);   
        
        
    })
})


// app.get('/api/users', (req, res) => {
    
//     MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//         if(err) {
//             return console.log("Could not connect to db")
//         }
//         console.log(`Connected to mongodb at url: ${url}`);
        
//         client.db('Cars').collection('items').insertOne({
//             model:"Ford",
//             year: 2017
//         }, (err, res) => {
//             if(err) {
//                 return console.log(`MONGO_ERROR: ${err}`)
//             }
//             //console.log(res);
//             console.log(res.ops[0]._id)
//         })
//         setTimeout(() => {
//             client.close();
//         }, 5000)   
        
        
        
        
//     })
// })

app.listen(port);