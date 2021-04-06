function Agendamento(nomeServico) {
    this.nomeServico = nomeServico;
  }
  
  Agendamento.prototype.qualServico = function() {
    console.log(this.nomeServico);
  };
  
  let agendamento = new Agendamento("Unhas");
  agendamento.qualServico();   //"Unhas"
  
  console.log(agendamento instanceof Agendamento);  // true
  console.log(agendamento instanceof Object);  // true
  console.log(agendamento);  // true
  console.log(typeof Agendamento);                    // "function"
  console.log(typeof Agendamento.prototype.qualServico);  // "function"