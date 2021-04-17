const router = require('express').Router();
const servicoUsuario = require('../../services/usuarios');
const passport = require('passport');

router.get('/usuarios',  
    passport.authenticate('bearer', {session: false}),
    servicoUsuario.carregarTodosUsuarios
);

router.post('/usuarios', 
    passport.authenticate('bearer', {session: false}),
    servicoUsuario.criarUsuario
);

router.get('/usuarios/:idUsuario', 
    passport.authenticate('bearer', {session: false}),
    servicoUsuario.carregarUsuario
);

router.put('/usuarios/:idUsuario',  
    passport.authenticate('bearer', {session: false}),
    servicoUsuario.alterarUsuario
);

router.delete('/usuarios/:idUsuario',  
    passport.authenticate('bearer', {session: false}),
    servicoUsuario.removerUsuario
);

module.exports = router;