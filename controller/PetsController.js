const petsModel = require('../model/petsModel');

const PetsController = {
    home: (req, res) => {
        res.send(petsModel.textoHome());
    },

    index: (req, res) => {
        let conteudo = petsModel.listarPets(petsModel.petsLista);
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
            res.send(`
            <a href="http://localhost:3000/"> Voltar para Home </a><br>
            <br>
            ***** Insira um pet válido. ***** <br>
            <br>
            <b>Como inserir um Pet válido na Url.</b><br>
            <br>
            <b>Formatação:</b>  /add/NOME/TIPO/IDADE/RACA/GENERO/ <br>
            <br>
            <b>Campos Obrigatórios:</b><br>
            Nome: Primeiro nome do Pet. <br>
            Tipo: Gato, Cachorro, Pássaro, etc. <br>
            Idade: Quantos anos ele tem. <br>
            <br>
            <b>Campos Adicionais:</b><br>
            Raça: Raça do Pet <br>
            Gênero: M ou F`)
        };
    },

    remove: (req, res) => {
        let {id} = req.params;
        if (id) {
            if (id <= petsModel.petsLista.length) {
                petsModel.deletarPet(id);
                res.send(`
        <a href="http://localhost:3000/"> Voltar para Home </a> <br>
        <br>
        Pet ID ${id} removido com sucesso`);
            } else {
                res.send(`
                Não existe nenhum pet de ID ${id} <br>
                Consulte os IDs <a href="http://localhost:3000/lista"> aqui </a>`);
            }

        } else {
            res.send(`
        <a href="http://localhost:3000/"> Voltar para Home </a> <br>
        <br>
        Insira um número em ID: /remove/ID`);
        }


    },

    search: (req, res) => {
        let {
            nome
        } = req.params;
        let resultado = petsModel.buscarPet(nome);
        if (nome) {
            if (Object.entries(resultado).length > 0) {
                res.send(`
        <a href="http://localhost:3000/"> Voltar para Home </a> <br>
        <br>
        Existe(m) ${resultado.length} resultado(s) para ${nome} <br>
        <br>
        ${petsModel.listarPets(resultado)}`);
            } else {
                res.send(`Não há registros de "${nome}" no sistema`)
            }
        } else {
            res.send(`
            <a href="http://localhost:3000/"> Voltar para Home </a> <br>
            Insira um nome válido: /search/NOME`);
        }
    }
}

module.exports = PetsController;