const router = require('express').Router();
const servicoLogin = require('../../services/login');
const passport = require('passport');

router.post('/login', passport.authenticate('local', { session: false}),
    servicoLogin.login
);

module.exports = router