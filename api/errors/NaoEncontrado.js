class NaoEncontrado extends Error {
    constructor(){
        super('Agendamento não encontrado');
        this.name = 'NaoEncontrado';
        this.idError = 4;
    }
};

module.exports = NaoEncontrado; 