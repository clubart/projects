var express = require('express');
var router = express.Router();
const db = require('../pool');

router.route('/')
    .get((req, res, next) => {
        db.query('SELECT * FROM recipes', (error, results, fields) => {
            if (error) return next(`Unable to fetch contacts ${error.message}`);
            res.send(results);
        });
    })
    .post((req, res, next) => {
        db.query(`INSERT INTO RECIPES(name, description, ingredients, image)
                  VALUES(?, ?, ?, ?)`,
            [req.body.name, req.body.description, req.body.ingredients, req.body.image],
            (error, result) => {
                if (error) return next(`Unable to add recipe ${error.message}`);
                if (!result.affectedRows) return next(`Unable to add recipe`);

                const recipe = {
                    name: req.body.name,
                    description: req.body.description,
                    ingredients: req.body.ingredients,
                    image: req.body.image,
                    id: result.insertId
                };
                res.status(201).send(recipe);
            }
        );
    });

router.route('/:id')
    .get((req, res, next) => {
        db.query('SELECT * FROM recipes WHERE id = ?',
            [req.params.id],
            (error, [result], fields) => {
                if (error) return next(`Unable to get contact ${req.params.id} ${error.message}`);
                if (!result) return next(`Unable to get contact ${req.params.id}`, 404);

                res.send(result);
            });
    })

module.exports = router;