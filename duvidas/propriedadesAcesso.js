class Agendamento {

    constructor(nomeServico) {
      this.nomeServico = nomeServico;
    }
  
    get qualServico() {
      return this.nomeServico + "Luzes";
    }
  
    set qualServico(value) {
      this.nomeServico = value;
    }

  }
  
var descriptor = Object.getOwnPropertyDescriptor(Agendamento.prototype,"qualServico");
console.log("get" in descriptor);   // true
console.log("set" in descriptor);   // true
console.log(descriptor.enumerable); // false

  //Nesse exemplo qualServico se torna uma propriedade não enumerada do prototype.
  //Quando ela for chamada será invocado o “getter”, e não a propriedade diretamente.

let agendamento = new Agendamento("Cabelo ");
console.log(agendamento.qualServico); //Cabelo Unhas
console.log(agendamento.qualServico = 'teste'); //Cabelo Unhas