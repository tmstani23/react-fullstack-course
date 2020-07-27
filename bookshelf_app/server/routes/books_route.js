const express = require('express');
const router = express.Router();

//Models
const {Book} = require('../models/book');
const {auth} = require('../middleware/auth');

//combine all types of routes
    //allows get/post/patch etc from same route
router.route('/book')
//get specific book based on id    
.get((req, res) => {
        //ex url: api/books/book?id=askdjflasdkj
        //get the id from url query string
        let id = req.query.id;

        //find book in db by id and return its document if found

        Book
            .find({_id: id})
            // populate goes to another collection (users) and includes all that user's data in the response
            .populate('ownerId', 'name lastname')
            .exec((err, doc) => {
                if(err) return res.status(400).send(err);
                res.send(...doc)
            })
    })
    //create a new book document
    .post(auth, (req, res) => {
        const book = new Book({
            ...req.body,
            // can access the user as was added to req obj in auth middleware
            ownerId: req.user._id
        })

        book.save((err, doc) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({
                post: true,
                bookId: doc._id
            })
        })
    })
    //update the book with new values based on request body
    .patch(auth, (req, res)=> {
        Book.findByIdAndUpdate(req.body._id, req.body, {new:true}, (err, doc) => {
            if(err) return res.status(400).send(err);
            res.json({
                success: true,
                doc
            })
        })
    })
    .delete(auth, (req, res) => {
        //uses id from url query params ex: http://localhost:3001/api/books/book?id=5f088b72b61dc60350802ce3
        let id = req.query.id;
        Book.findByIdAndRemove(id, (err, doc) => {
            if(err) return res.status(400).send(err);
            res.json({
                success: true,
                message: "book deleted"
            })
        })
    })



//Routes for all books
router.route('/all_books')
    //ex: http://localhost:3001/api/books/all_books?skip=1&limit=2&order=asc&owner=sdfjdskjadsfa
    .get((req, res) => {
        let skip = req.query.skip ? parseInt(req.query.skip) : 0;
        let limit = req.query.limit ? parseInt(req.query.limit) : 0;
        let order = req.query.order? req.query.order : 0;
        //If an owner id object is passed use it else use an empty obj as default
        let byOwner = req.query.owner ? {ownerId: req.query.owner} : {};

        Book.find().skip(skip).sort({_id: order}).limit(limit).exec((err, doc) => {
            if(err) return res.status(400).send(err);
            res.send(doc);
        })

    })

module.exports = router;
