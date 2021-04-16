const router = require('express').Router();
const controllerUsuario = require('../../usuarios/controllerUsuario');
const passport = require('passport');

router.post('/login', passport.authenticate('local', { session: false}),
    controllerUsuario.login
);

module.exports = router