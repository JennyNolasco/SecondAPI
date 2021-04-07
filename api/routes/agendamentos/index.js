const router = require('express').Router()

router.use('/agendamentos', (req, resp) => {
    resp.send('OK')
});

module.exports = router