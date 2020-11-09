const express = require('express');
const app = express();

const socketIo = require('socket.io');
const mongo = require('mongodb');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let library;
let io;

//const librariesRouter = require('./routes/libraries');
//app.use('/libraries', librariesRouter);

app.use(cors());

app.route('/libraries').
    get(async (req, res, next) => {
        try {
            const theLibraries = await library.find().toArray();

            res.send(theLibraries);
        } catch (e) {
            return next(e);
        }
    })
    .post(async (req, res, next) => {
        const newLibrary = {
            name: req.body.name,
            password: req.body.password,
            adminPassword: req.body.adminPassword,
        };

        try {
            await library.insertOne(newLibrary);
            res.status(201).send(newLibrary);
        } catch (e) {
            return next(e);
        }
    });

app.route('/libraries/:id/books')
    .get(async (req, res, next) => {
        const theBooks = await library.find({ _id: mongo.ObjectId(req.params.id) })
            .project({ books: 1 }).toArray();
        res.send(theBooks);
    })
    .post(async (req, res, next) => {
        const newBook = {
            name: req.body.name,
            category: req.body.category,
            shelf: req.body.shelf
        };

        try {
            await library.updateOne({ _id: mongo.ObjectId(req.params.id) },
                {
                    $push: {
                        books: newBook
                    }
                });

            res.status(201).send(newBook);
        } catch (e) {
            return next(e);
        }
    });

app.use((req, res, next) => {
    const err = new Error('No such API method');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'oops');
});

async function connectToMongo() {
    const client = new mongo.MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db('libraries');
        library = db.collection('library');
    } catch (err) {
        console.error(err);
    }
}

connectToMongo().catch(e => console.error(e));

io = socketIo.listen(app.listen(80));