const ModeloTabelaAgendamento = require('../agendamentos/modelTabelaAgendamento');
const ModeloTabelaUsuario = require('../usuarios/modelTabelaUsuario');

ModeloTabelaAgendamento.sync()
    .then(()=> {
        console.log('Tabela criada com sucesso')
    })
    .catch((error) => {
        console.log('Erro, tabela não criada', error)
    });

ModeloTabelaUsuario.sync()
    .then(()=> {
        console.log('Tabela criada com sucesso')
    })
    .catch((error) => {
        console.log('Erro, tabela não criada', error)
    });