const SerializadorAgendamento = require('../../shared/Serializar').SerializarAgendamento;
const Agendamento = require('../../services/agendamentos/Agendamento');
const TabelaAgendamento = require('../../models/agendamentos/TabelaAgendamento');

module.exports = {
    criarAgendamento: async (req, resp, next) => {
        try {
            const reqAgendamento = req.body;
            const agendamento = new Agendamento(reqAgendamento);
            await agendamento.criar()
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type'),
                ['status']
            );
            resp.status(201).send(serializador.transformar(agendamento));
        } catch (error) {
            next(error)
        }
    },

    carregarAgendamento: async (req, resp, next) => {
        try {
            const id = req.params.idAgendamento;
            const agendamento = new Agendamento({id:id});
            await agendamento.buscar();
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type'),
                ['nome_servico', 'status']
            );
            resp.status(200).send(serializador.transformar(agendamento));
        } catch (error) {
            next(error)
        }
    },

    carregarTodosAgendamentos: async (req, resp, next) => {
        try {
            const results = await TabelaAgendamento.listar();
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type'),
                ['nome_servico']
            );
            agendamentos = serializador.transformar(results)
            resp.status(200).send(agendamentos);
        } catch (error) {
            next(error)
        }
    },
    
    deletarAgendamento: async (req, resp, next) => {
        try {
            const id = req.params.idAgendamento;
            const agendamento = new Agendamento({id:id});
            await agendamento.remover();
            resp.status(204).send()
        } catch (error) {
            next(error)
        }
    },
    
    alterarAgendamento: async (req, resp, next) => {
        try{
            const id = req.params.idAgendamento;
            const dadosBody = req.body;
            const dados = Object.assign({}, dadosBody, {id: id})
            const agendamento = new Agendamento(dados);
            await agendamento.atualizar();
            resp.status(204).send();
        } catch (error) {
            next(error)
        }
    }


}