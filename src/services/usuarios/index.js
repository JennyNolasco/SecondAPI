const SerializadorUsuario = require('../../shared/Serializar').SerializarUsuario;
const TabelaUsuario = require('../../models/usuarios/TabelaUsuario');
const Usuario = require('../../services/usuarios/Usuario');

module.exports = {
    carregarTodosUsuarios: async(req, resp, next) => {
        try{
            const results = await TabelaUsuario.listar();
            const serializador = new SerializadorUsuario(
                resp.getHeader('Content-Type')
            )
            resp.status(200).send(serializador.transformar(results));
        } catch (error) {
            next(error);
        };
    },
    criarUsuario: async (req, resp, next) => {
        try {
            const reqUsuario = req.body;
            const usuario = new Usuario(reqUsuario);
            await usuario.criar();
            const serializador = new SerializadorUsuario(
                resp.getHeader('Content-Type')
            );
            resp.status(201).send(serializador.transformar(usuario))
        } catch(error) {
            next(error);
        };
    },

    carregarUsuario: async (req, resp, next) => {
        try {
            const id = req.params.idUsuario;
            const usuario = new Usuario({id:id});
            await usuario.buscarPorId();
            const serializador = new SerializadorUsuario(
                resp.getHeader('Content-Type')
            );
            resp.status(200).send(serializador.transformar(usuario));
        } catch(error){ 
            next(error)
        };
    },
    
    alterarUsuario: async (req, resp, next) => {
        try {
            const id = req.params.idUsuario;
            const dadosBody = req.body;
            const dados = Object.assign({}, dadosBody, {id:id});
            const usuario = new Usuario(dados);
            await usuario.atualizar();
            const serializador = new SerializadorUsuario(
                resp.getHeader('Content-Type')
            )
            resp.status(204).send(serializador.transformar(usuario));
        } catch(error) { 
            next(error)
        };
    },
    
    removerUsuario: async (req, resp, next) => {
        try{
            const id = req.params.idUsuario;
            const usuario = new Usuario({id: id});
            await usuario.remover()
            resp.status(204).send()
        } catch (error) {
            next(error)
        }
    }

};