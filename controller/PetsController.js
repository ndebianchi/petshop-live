const petsModel = require('../model/petsModel');

const PetsController = {
    home: (req, res) => {
        res.send(petsModel.textoHome());
    },

    index: (req, res) => {
        let conteudo = petsModel.listarPets();
        if (conteudo.length > 0) {
            res.send(`
            <a href="http://localhost:3000/"> Voltar para Home </a> <br>
            ${conteudo}`);
        } else {
            res.send("Não há pets registrados no sistema");
        };
    },

    add: (req, res) => {
        let novoPet = req.params;
        if (petsModel.adicionarPet(novoPet)) {
            res.send(`
                <a href="http://localhost:3000/"> Voltar para Home </a> <br>
                ${novoPet.nome} foi adicionado(a) com sucesso`)
        } else {
            res.send(`Insira um pet válido. Veja como <a href="http://localhost:3000/"> aqui</a>`)
        };
    },

    remove: (req, res) => {
        res.send("deletar pet")
    },

    search: (req, res) => {
        res.send("buscar pet")
    }
}

module.exports = PetsController;