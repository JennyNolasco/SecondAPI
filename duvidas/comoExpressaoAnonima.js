let agendamento = new class {

  constructor(nomeServico) {
    this.nomeServico = nomeServico;
  }

  qualServico() {
    console.log(this.nomeServico);
  }

}("Unhas");

agendamento.qualServico(); //Unhas