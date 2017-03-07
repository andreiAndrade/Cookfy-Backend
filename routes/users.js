var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send([{
        id: 1,
        firstName: 'My',
        lastName: 'Name',
        birthday: '1999/12/31',
        email: 'me@email.com',
        password: 'pass'
    }]);
});

/* GET users by id listing. */
router.get('/:id', function (req, res, next) {
    var list = [
        {
            id: 1,
            firstName: 'My',
            lastName: 'Name',
            birthday: '1999/12/31',
            email: 'me@email.com',
            password: 'pass'
        },
        {
            id: 2,
            firstName: 'My',
            lastName: 'Name',
            birthday: '1999/12/31',
            email: 'me@email.com',
            password: 'pass'
        },
        {
            id: 3,
            firstName: 'My',
            lastName: 'Name',
            birthday: '1999/12/31',
            email: 'me@email.com',
            password: 'pass'
        },
        {
            id: 4,
            firstName: 'My',
            lastName: 'Name',
            birthday: '1999/12/31',
            email: 'me@email.com',
            password: 'pass'
        }
    ];
    list.forEach(function (item, index) {
        if (item.id == req.params.id) res.send(item);
    });

    res.send('Find no results!')
});

/* PUT user listing. */
router.put('/:id', function (req, res, next) {

    req.checkBody('firstName', 'Invalid name')
        .notEmpty().withMessage('Param is required!')
        .isAlpha().withMessage('Param is not a string!');
    req.checkBody('lastName', 'Invalid lastname')
        .notEmpty().withMessage('Lastname is required!')
        .isAlpha().withMessage('Lastname is not a string!');
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

            res.send('Atualizado com sucesso!');
        }
    });
});

module.exports = router;
