/**
 * Created by Andrei Andrade on 01/03/2017.
 */
var express = require('express');
var router = express.Router();

/* POST cookbooks listing. */
router.post('/', function (req, res, next) {

    req.checkBody('name', 'Invalid name')
        .notEmpty().withMessage('Name is required!');
    req.checkBody('description', 'Invalid description')
        .notEmpty().withMessage('Description is required!');
    req.checkBody('owner', 'Invalid owner')
        .notEmpty().withMessage('Owner is required!')
        .isInt().withMessage('Owner\'s id is not valid!');

    req.getValidationResult().then(function (result) {
        if(!result.isEmpty()) {
            res.send(result.array(), 400);
        } else {

            res.send('Salvo com sucesso!');
        }
    });
});

module.exports = router;

