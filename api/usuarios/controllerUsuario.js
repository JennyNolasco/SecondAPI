const jwt = require('jsonwebtoken');
const Usuario = require('./Usuario');
const crypto = require('crypto');

function criarToken(usuario) {
    const payload = {
        id: usuario.id
    };

    return jwt.sign(payload, process.env.JWT_KEY);
}

module.exports = {
    login: (req, resp) => {
        const accessToken = criarToken(req.user);
        resp.set('Authorization', accessToken);
        resp.status(200).send();
    }
}