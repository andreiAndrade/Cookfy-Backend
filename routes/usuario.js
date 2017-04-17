var express = require('express');
var router = express.Router();

/*
    usuario = {
        nome : String (required),
        matricula : String (required),
        email : String (required),
        tipoUsuario : tipoUsuario (required),
        senha : String (required),
        coordenador : boolean (required),
        curso : Curso (required),
        areasDominio : AreaDominio[] (required),
    },
    professor = {
        nome : String (required),
        matricula : String (required),
        email : String (required),
        tipoUsuario : tipoUsuario.professor (required),
        senha : String (required),
        coordenador : boolean (required),
        curso : Curso (required),
        areasDominio : areaDominio[] (required),
    },
    aluno = {
        nome : String (required),
        matricula : String (required),
        email : String (required),
        tipoUsuario : tipoUsuario.aluno (required),
        senha : String (required),
        curso : Curso (required)
    },
    cre = {
        nome : String (required),
        matricula : String (required),
        email : String (required),
        tipoUsuario : tipoUsuario.cre (required),
        senha : String (required)
    },
    admin = {
        nome : String (required),
        matricula : String (required),
        email : String (required),
        tipoUsuario : tipoUsuario.admin (required),
        senha : String (required)
    },
 */

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send([{
        nome : 'Andrei',
        matricula : '10070128',
        email : 'ardlsdandradi@restinga.ifrs.edu',
        tipoUsuario : tipoUsuario.professor,
        senha : 'hash',
        coordenador : true,
        curso : {nome : 'ADS'},
        areasDominio : [
            {
                nome : 'Informática',
                descricao : 'Info'
            },
            {
                nome : 'Biologia',
                descricao : 'Bio'
            }
        ]
    }]);
});

/* GET users by id listing. */
router.get('/:id', function (req, res, next) {
    res.send([{
        nome : 'Andrei',
        matricula : '10070128',
        email : 'ardlsdandradi@restinga.ifrs.edu',
        tipoUsuario : tipoUsuario.professor,
        senha : 'hash',
        coordenador : true,
        curso : {nome : 'ADS'},
        areasDominio : [
            {
                nome : 'Informática',
                descricao : 'Info'
            },
            {
                nome : 'Biologia',
                descricao : 'Bio'
            }
        ]
    }]);
});

/* POST user listing. */
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
