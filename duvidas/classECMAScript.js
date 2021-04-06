class Agendamento {
    constructor(nomeServico) {
      this.nomeServico = nomeServico;
    }
  
    qualServico() {
      console.log(this.nomeServico);
    }
  }
  
  let agendamento = new Agendamento("Unhas");
  agendamento.qualServico();   //"Unhas"
  console.log(agendamento instanceof Agendamento);  // true
  console.log(agendamento instanceof Object); // true
  console.log(typeof Agendamento);                    // "function"
  console.log(typeof Agendamento.prototype.qualServico);  // "function"