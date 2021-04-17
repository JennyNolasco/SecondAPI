class NaoEncontrado extends Error {
    constructor(classe){
        super(`${classe} não encontrado`);
        this.name = 'NaoEncontrado';
        this.idError = 4;
    }
};

module.exports = NaoEncontrado; 