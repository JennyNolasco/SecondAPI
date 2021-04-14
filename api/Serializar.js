const FormatoInvalido = require('./errors/FormatoInvalido');
const jsontoxml = require('jsontoxml');

class Serializar {
    json(dados) {
        return JSON.stringify(dados)
    };

    xml(dados) {
        if(Array.isArray(dados)){
            dados = dados.map((item) => {
                return {
                    [this.tag]: item
                }
            });
            this.tag = this.tagList;
        }
        return jsontoxml({
            [this.tag]:dados
        });
    }

    transformar(dados) {
        dados = this.filtrar(dados);
        if(this.contentType === 'application/json') {
            return this.json(
                dados
            )
        }

        if(this.contentType === 'application/xml'){
            return this.xml(
                dados
            )
        }

        throw new FormatoInvalido(this.contentType);
    };

    filtrarCampos(dados) {
        const camposFiltrados = {};
        this.camposPermitidos.forEach((campo) => {
            if(dados.hasOwnProperty(campo)) {
                camposFiltrados[campo] = dados[campo];
            }
        });

        return camposFiltrados;
    };

    filtrar(dados) {
        let dadosFiltrados = this.filtrarCampos(dados);

        if(Array.isArray(dados)) {
            dadosFiltrados = dados.map((dado) => {
                return this.filtrarCampos(dado);
            });
        }

        return dadosFiltrados;
    }
}

class SerializarAgendamento extends Serializar {
    constructor(contentType, camposPersonalizados) {
        super()
        this.contentType = contentType;
        this.camposPermitidos = [
            'id', 'nome_cliente', 'data_agendamento'
        ].concat(camposPersonalizados || []);
        this.tag = 'Agendamento';
        this.tagList = 'Agendamentos';
    }
}

class SerializarErro extends Serializar {
    constructor(contentType, camposPersonalizados) {
        super();
        this.contentType = contentType;
        this.camposPermitidos = [
            'id', 'mensagem'
        ].concat(camposPersonalizados || []);
        this.tag = 'Error';
        this.tagList = 'Erros'
    }
}

class SerializarUsuario extends Serializar {
    constructor(contentType, camposPersonalizados) {
        super();
        this.contentType = contentType;
        this.camposPermitidos = [
            'id', 'nome', 'email', 'senha'
        ].concat(camposPersonalizados || []);
            this.tag = 'Usuario';
            this.tagList = 'Usuarios';
    }
}


module.exports = {
    Serializar: Serializar,
    SerializarAgendamento: SerializarAgendamento,
    SerializarError: SerializarErro,
    SerializarUsuario: SerializarUsuario,
    FormatosValidos: ['application/json', 'application/xml']
}
