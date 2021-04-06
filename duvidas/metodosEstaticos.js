//A função AgendamentoAntigo funciona como o construtor e logo depois a função printServico é adicionada diretamente ao prototype
//Com isso ela não depende da instancia.

function AgendamentoAntigo(nomeServico) {
    this.nomeServico = nomeServico;
  }
  
  AgendamentoAntigo.printServico = function(nomeServico) {
    console.log(nomeServico);
  };
  
  AgendamentoAntigo.printServico('Cabelo');

  //-------------------------------------------------

  class Agendamento {
    constructor(nomeCLiente) {
      this.nomeCLiente = nomeCLiente;
    }
  
    static printNome(nomeCLiente) {
      console.log(nomeCLiente); //
    }
  }
  
  Agendamento.printNome('Jenny');