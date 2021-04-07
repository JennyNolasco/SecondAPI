const modeloAgendamento = require('./modelTabelaAgendamento');

module.exports = {
    async listar() {
        return await modeloAgendamento.findAll({
            raw: true,    
        });
    }
}