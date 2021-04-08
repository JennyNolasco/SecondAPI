const TabelaAgendamento = require('./TabelaAgendamento')

class Agendamento {
    constructor({id, nome_cliente, nome_servico, status, data_agendamento,
    data_criacao, data_atualizacao}) {
        this.id = id;
        this.nome_servico = nome_servico;
        this.nome_cliente = nome_cliente;
        this.status = status;
        this.data_agendamento = data_agendamento;
        this.data_criação = data_criacao;
        this.data_atualizacao = data_atualizacao;
    }

    async criar(){
        const result = await TabelaAgendamento.adicionar({
            nome_cliente:  this.nome_cliente,
            nome_servico: this.nome_servico,
            status: this.status,
            data_agendamento: this.data_agendamento
        });
        this.id = result.id;
        this.data_criação = result.data_criacao;
        this.data_atualizacao = result.data_atualizacao;
    };

    async buscar() {
        const result = await TabelaAgendamento.buscarPorPK(this.id);
        this.nome_servico = result.nome_servico;
        this.nome_cliente = result.nome_cliente;
        this.status = result.status;
        this.data_agendamento = result.data_agendamento;
        this.data_criação = result.data_criacao;
        this.data_atualizacao = result.data_atualizacao;
    }

    async remover() {
        await TabelaAgendamento.remover(this.id)
    }
}
module.exports = Agendamento;