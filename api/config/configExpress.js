const express = require('express');
const router = require('../routes/agendamentos');

module.exports = () => {
    const app = express()

    app.use(express.json())
    app.use('/api', router)

    return app
}