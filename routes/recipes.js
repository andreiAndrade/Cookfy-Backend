/**
 * Created by Andrei Andrade on 01/03/2017.
 */
var express = require('express');
var router = express.Router();

/* POST recipes listing. */
router.post('/', function (req, res, next) {

    req.checkBody('name', 'Invalid name')
        .notEmpty().withMessage('Name is required!');
    req.checkBody('description', 'Invalid description')
        .notEmpty().withMessage('Description is required!');
    req.checkBody('steps', 'Invalid steps')
        .notEmpty().withMessage('Steps is required!');
    req.checkBody('ingredients', 'Invalid ingredients')
        .notEmpty().withMessage('Ingredients is required!');
    req.checkBody('yield', 'Invalid yield')
        .notEmpty().withMessage('Yield is required!')
        .isInt().withMessage('Yield is not a integer!');
    req.checkBody('cost', 'Invalid cost')
        .notEmpty().withMessage('Cost is required!')
        .isDecimal().withMessage('Cost is not a decimal!');
    req.checkBody('owner', 'Invalid owner')
        .isInt().withMessage('Owner is not a integer!');

    req.getValidationResult().then(function (result) {
        if(!result.isEmpty()) {
            res.send(result.array(), 400);
        } else {

            res.send('Salvo com sucesso!');
        }
    });
});

/* GET recipes by id listing. */
router.get('/:id', function (req, res, next) {
    var list = [
        {
            id : 1,
            name : "Massa com frango",
            description : "Opcional",
            steps : [
                {step : "Cozinhe a massa"},
                {step : "Sirva-se"}
            ],
            ingredients : [
                {ingredient: "500g de massa"},
                {ingredient: "meio litro de água"}
            ],
            yield : 2,
            totalTime : 40,
            cost : 50.90,
            owner : 1
        }
    ];
    list.forEach(function (item, index) {
        if (item.id == req.params.id) res.send(item);
    });

    res.send('Find no results!')
});

module.exports = router;
