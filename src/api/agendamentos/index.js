const router = require('express').Router()
const servicoAgendamento = require('../../services/agendamentos');
const passport = require('passport');

router.get('/agendamentos', 
    passport.authenticate('bearer', {session: false}),
    servicoAgendamento.carregarTodosAgendamentos
);

router.get('/agendamentos/:idAgendamento', 
    passport.authenticate('bearer', {session: false}),
    servicoAgendamento.carregarAgendamento
);

router.post('/agendamentos', 
    passport.authenticate('bearer', {session: false}),
    servicoAgendamento.criarAgendamento
);

router.put('/agendamentos/:idAgendamento', 
    passport.authenticate('bearer', {session: false}),
    servicoAgendamento.alterarAgendamento
);

router.delete('/agendamentos/:idAgendamento', 
    passport.authenticate('bearer', {session: false}),
    servicoAgendamento.deletarAgendamento
);

module.exports = router