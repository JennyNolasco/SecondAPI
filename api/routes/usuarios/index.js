const router = require('express').Router();
const SerializadorUsuario = require('../../Serializar').SerializarUsuario;
const TabelaUsuario = require('../../usuarios/TabelaUsuario');
const Usuario = require('../../usuarios/Usuario');

router.get('/usuarios', async(req, resp, next) => {
    try{
        const results = await TabelaUsuario.listar();
        const serializador = new SerializadorUsuario(
            resp.getHeader('Content-Type')
        )
        resp.status(200).send(serializador.transformar(results));
    } catch (error) {
        next(error);
    };
});

router.post('/usuarios', async (req, resp, next) => {
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
    
});

router.get('/usuarios/:idUsuario', async (req, resp, next) => {
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
});


router.put('/usuarios/:idUsuario', async (req, resp, next) => {
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
});




module.exports = router;