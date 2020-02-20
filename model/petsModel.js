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

const textoHome = () => {
    let texto = `
    ***** PETSHOP DH *****<br>
    <br>
    <b>Lista de páginas:</b> <br>
    <a href="http://localhost:3000/lista"> /lista</a> : Mostra todos os Pets cadastrados <br>
    <a href="http://localhost:3000/add"> /add</a> : Adiciona novos pets à lista <br>
    <a href="http://localhost:3000/remove"> /remove</a> : Remove pets da lista <br>
    <a href="http://localhost:3000/search"> /search</a> : Busca pets por nome <br>
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
    Gênero: M ou F`

    return texto
}

const listarPets = () => {
    let lista = ""
    for (let pet of pets) {
        lista += `
        --------------------- <br>
        Nome: ${pet.nome} <br>
        Tipo: ${pet.tipo} <br>
        Raça: ${pet.raca} <br>
        Idade: ${pet.idade} <br>
        Genero: ${(pet.genero == "F" ? "Femea" : "Macho")} <br>
        Vacinado: ${(pet.vacinado ? "Sim" : "Não")} <br>
        Serviços: ${pet.servicos} <br>`
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
    adicionarPet,
    textoHome
};