class DadosNaoInformados extends Error {
    constructor(){
        super('Dados não informados');
        this.name = 'DadosNaoInformados';
        this.idError = 3;
        this.mensagem = 'Dados não informados';
    }
}

module.exports = DadosNaoInformados;