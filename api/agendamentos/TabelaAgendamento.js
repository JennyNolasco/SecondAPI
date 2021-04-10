const modeloAgendamento = require('./modelTabelaAgendamento');

module.exports = {
    async listar() {
        try {
            return await modeloAgendamento.findAll({
                raw: true,    
            });
        } catch (error) {
            throw error
        }
    },

    async adicionar(agendamento) {
        try {
            return await modeloAgendamento.create(agendamento);
        } catch (error) {
            throw error
        }   
    },

    async buscarPorPK(id) {
        try {
            return await modeloAgendamento.findByPk(id);
        } catch (error) {
            throw error
        };
    },

    async remover(id) {
        try {
            return await modeloAgendamento.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw error
        }
    },

    async atualizar(id, dados) {
        try {
            return await modeloAgendamento.update(dados, 
                {
                    where: {
                        id:id
                    }
                })
        } catch (error) {
            throw error
        }
    }
}