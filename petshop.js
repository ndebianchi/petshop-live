let pets = [{
        nome: "Batman",
        tipo: "cão",
        raca: "vira-lata",
        idade: 2,
        genero: "M",
        vacinado: true,
        servicos: ["banho", "tosa", "corte de unha"]
    },
    {
        nome: "Lua",
        tipo: "gato",
        raca: "Siamês",
        idade: 8,
        genero: "F",
        vacinado: false,
        servicos: ["banho", "corte de unha"]
    },
    {
        nome: "Joaquim",
        tipo: "gato",
        raca: "Tuxedo",
        idade: 2,
        genero: "M",
        vacinado: true,
        servicos: ["banho", "corte de unha"]
    },
    {
        nome: "Gata",
        tipo: "gato",
        raca: "Singapura",
        idade: 3,
        genero: "F",
        vacinado: true,
        servicos: ["banho", "corte de unha"]
    },
    {
        nome: "Bartolomeu",
        tipo: "cachorro",
        raca: "vira-lata",
        idade: 6,
        genero: "M",
        vacinado: false,
        servicos: ["banho"]
    }
];

const listarPets = () => {
    let lista = ""
    for (let pet of pets) {
        lista += `
        ---------------------
        Nome: ${pet.nome}
        Tipo: ${pet.tipo}
        Raça: ${pet.raca}
        Idade: ${pet.idade}
        Genero: ${(pet.genero == "F" ? "Femea" : "Macho")}
        Vacinado: ${(pet.vacinado ? "Sim" : "Não")}
        Serviços: ${pet.servicos}`
    }
    return lista;
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
            novoPet.idade = "Gênero não definido"
        }

        return pets.push(novoPet)
    }
};


const checarPet = pet => {
    return (
        pet.nome &&
        pet.tipo &&
        pet.idade
    )
};

module.exports = {
    listarPets,
    adicionarPet
};