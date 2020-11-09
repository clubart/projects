const express = require('express');
const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
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
            books: req.body.books
        };

        try {
            await library.insertOne(newLibrary);
            res.status(201).send(newLibrary);
        } catch (e) {
            return next(e);
        }
    });

module.exports = router;