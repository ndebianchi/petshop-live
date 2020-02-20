let petsLista = [{
        nome: "Batman",
        tipo: "cão",
        raca: "vira-lata",
        idade: 2,
        genero: "M",
        vacinado: true,
        servicos: ["banho", "tosa", "corte de unha"],
        ID: 0
    },
    {
        nome: "Lua",
        tipo: "gato",
        raca: "Siamês",
        idade: 8,
        genero: "F",
        vacinado: false,
        servicos: ["banho", "corte de unha"],
        ID: 1
    },
    {
        nome: "Joaquim",
        tipo: "gato",
        raca: "Tuxedo",
        idade: 2,
        genero: "M",
        vacinado: true,
        servicos: ["banho", "corte de unha"],
        ID: 2
    },
    {
        nome: "Gata",
        tipo: "gato",
        raca: "Singapura",
        idade: 3,
        genero: "F",
        vacinado: true,
        servicos: ["banho", "corte de unha"],
        ID: 3
    },
    {
        nome: "Bartolomeu",
        tipo: "cachorro",
        raca: "vira-lata",
        idade: 6,
        genero: "M",
        vacinado: false,
        servicos: ["banho"],
        ID: 4
    }
];

const textoHome = () => {
    let texto = `
    ***** PETSHOP DH *****<br>
    <br>
    <b>Lista de páginas:</b> <br>
    <a href="http://localhost:3000/lista"> /lista</a> : Mostra todos os Pets cadastrados <br>
    <a href="http://localhost:3000/add"> /add</a> : Adiciona novos pets à lista <br>
    <a href="http://localhost:3000/remove"> /remove</a> : Remove pets da lista <br>
    <a href="http://localhost:3000/search"> /search</a> : Busca pets por nome <br>`

    return texto
}

const listarPets = lista => {
    let conteudo = ""
    for (let pet of lista) {
        conteudo += `
        --------------------- <br>
        Nome: ${pet.nome} <br>
        ID: ${pet.ID}<br>
        Tipo: ${pet.tipo} <br>
        Raça: ${pet.raca} <br>
        Idade: ${pet.idade} <br>
        Genero: ${(pet.genero == "F" ? "Femea" : "Macho")} <br>
        Vacinado: ${(pet.vacinado ? "Sim" : "Não")} <br>
        Serviços: ${pet.servicos} <br>`
    }
    return conteudo;
};

const adicionarPet = novoPet => {
    if (typeof novoPet == "object" && checarPet(novoPet)) {
        novoPet.nome = novoPet.nome.toString();
        novoPet.tipo = novoPet.tipo.toString();
        novoPet.idade = parseInt(novoPet.idade);
        if (!novoPet.servicos) {
            novoPet.servicos = [];
        }
        if (!novoPet.raca) {
            novoPet.raca = "RND"
        }
        if (!novoPet.genero) {
            novoPet.genero = "Gênero não definido"
        }
        novoPet.ID = petsLista.length;

        return petsLista.push(novoPet)
    }
};

const checarPet = pet => {
    return (
        pet.nome &&
        pet.tipo &&
        pet.idade
    )
};

const buscarPet = nome => {
    let petsBuscados = petsLista.filter(pet => pet.nome == nome)
    return petsBuscados;

};

const deletarPet = indice => {
    petsLista.splice(indice, 1);
    arrumarID();
    return petsLista;
};

const arrumarID = () => {
    for (let pet of petsLista) {
        pet.ID = petsLista.indexOf(pet);
    }
}


module.exports = {
    petsLista,
    listarPets,
    adicionarPet,
    textoHome,
    buscarPet,
    deletarPet,
};