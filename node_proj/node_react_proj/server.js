const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const url = 'mongodb://localhost:27017/Mongo_Test_App';
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

//Once connected mongoose will keep the connection alive
    //client.close/setTimeout no longer necessary
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//// CREATE MONGOOSE SCHEMA AND MODEL

//Schema for specifying types
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean,
})

//Model has a name and reference to schema
const Car = mongoose.model('Car', carSchema);

/////////////////////////////////////////

///////////////Post Routes//////////
app.post('/api/add_car', (req, res) => {
    
    const addCar = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        avail: req.body.avail,
    })
    
    
    addCar.save((err, doc) => {
        if(err) {
            return console.log(err)
        }
        console.log(doc);

        res.sendStatus(200);
        
    })
})

app.post('/api/remove_car', (req, res) => {
    const brand = req.body.brand;
    
    //Will only remove a single document
    Car.findOneAndRemove({brand}, (err, doc) => {
        if (err) return console.log(err);
        res.json(doc);
    })
    //Removes a single document that matches the input id
    // Car.findByIdAndRemove({__id: id}, (err, doc) => {
    //     if (err) return console.log(err);
    //     res.json(doc);
    // })

    //Will remove all documents that match the search
    // Car.remove({brand}, (err, doc) => {
    //     if (err) return console.log(err);
    //     res.json(doc);
    // })
    
})
/////////////////////////////////////

///////////////Get Routes//////////
app.get('/api/get_cars', (req, res) => {
    //Different variations on the find method for getting documents
    // Car.find({brand: 'Maxima', model: "Nissan"}, (err, doc) => {
    //     if(err) return console.log(err);
    //     res.json(doc);
    // })
    // Car.findOne({brand: 'Maxima'}, (err, doc) => {
    //     if(err) return console.log(err);
    //     //Must return as array.  Find one will return a single obj and that will cause the map to fail in render method
    //     res.json([doc]); 
    // })
    // Car.find({brand: 'Ferrari'}, (err, doc) => {
    //     if(err) return console.log(err);
    //     res.json(doc);
    // })
    Car.find((err, doc) => {
        if(err) return console.log(err);
        res.json(doc);
    })
})

/////////////////////////////////////


app.listen(port);