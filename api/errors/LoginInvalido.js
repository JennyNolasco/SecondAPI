class LoginInvalido extends Error {
    constructor(){
        super('e-mail ou senha inválidos');
        this.name = 'LoginInvalido';
        this.idError = 7;
    };
};

module.exports = LoginInvalido;