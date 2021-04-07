const router = require('express').Router()
const TabelaAgendamento = require('../../agendamentos/TabelaAgendamento');

router.get('/agendamentos', async (req, resp) => {
    const results = await TabelaAgendamento.listar()
    resp.send(JSON.stringify(results));
});

router.post('/agendamentos', async (req, resp) => {
    const reqAgendamento = req.body;
    
});

module.exports = router