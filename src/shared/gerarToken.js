const jwt = require('jsonwebtoken');
const crypto = require('crypto');

function criarToken(usuario) {
    const payload = {
        id: usuario.id
    };

    return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '10m'});
}

module.exports = criarToken