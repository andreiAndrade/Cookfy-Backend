/**
 * Created by Andrei Andrade on 01/03/2017.
 */
var express = require('express');
var router = express.Router();

/* POST signup listing. */
router.post('/', function (req, res, next) {

    req.checkBody('fullName', 'Invalid name')
        .notEmpty().withMessage('Param is required!')
        .isAlpha().withMessage('Param is not a string!');
    req.checkBody('registry', 'Invalid registry')
        .notEmpty().withMessage('Registry is required!')
        .isAlpha().withMessage('Registry is not a string!');
    req.checkBody('course', 'Invalid course')
        .notEmpty().withMessage('Course is required!')
        .isAlpha().withMessage('Course is not a string!');
    req.checkBody('email', 'Invalid email')
        .notEmpty().withMessage('Email is required!')
        .isEmail().withMessage('Email is not a email!');
    req.checkBody('password', 'Param is required!').notEmpty();
    req.check('repeatPassword', 'Param is not equals to password!').isEquals(req.body.password);
    req.checkBody('birthday').optional().isDate();

    req.getValidationResult().then(function (result) {
        if(!result.isEmpty()) {
            res.send(result.array(), 400);
        } else {

            res.send('Salvo com sucesso!');
        }
    });
});

module.exports = router;
