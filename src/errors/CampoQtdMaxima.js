class CampoQtdMaxima extends Error {
    constructor(campo) {
        const mensagem = `O campo ${campo} ultrapassou a quantidade máxima de 64 caracteres`;
        super(mensagem);
        this.name = 'CampoQtdMaxima';
        this.idError = 5;
    };
};

module.exports = CampoQtdMaxima;