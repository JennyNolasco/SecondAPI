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
}