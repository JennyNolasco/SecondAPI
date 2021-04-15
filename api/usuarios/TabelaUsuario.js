const modeloUsuario = require('./modelTabelaUsuario');


module.exports = {
    async listar() {
        try {
            return await modeloUsuario.findAll({
                raw: true,
            });
        } catch (error) {
            throw error        
        }
    },

    async adicionar(usuario) {
        try{
            return await modeloUsuario.create(usuario);
        } catch (error) {
            throw error
        }
    },

    async buscarPorPK(id) {
        try {
            return await modeloUsuario.findByPk(id)
        } catch (error) {
            throw error
        }
    },

    async buscarPorEmail(email) {
        try {
            return await modeloUsuario.findOne({
                where: {
                    email: email
                }
            });
        } catch (error) {
            throw error
        }
    },
    
    async atualizar(id, dados) {
        try { 
            return await modeloUsuario.update(
                dados,
                {
                    where: {
                        id:id
                    }
                }
            );
        } catch (error) {
            throw error
        }
    },

    async remover(id) {
        try {
            return await modeloUsuario.destroy(
                {
                    where: {
                        id: id
                    }
                }
            );
        } catch (error) {
            throw error
        }
    }
}