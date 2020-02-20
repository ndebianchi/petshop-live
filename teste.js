let lista = [
    {
        nome: "Nicolas",
        ID: 7
    },{
        nome: "Kalinka",
        ID: 12
    },{
        nome: "Thiago",
        ID: 9
    },{
        nome: "Nicolas",
        ID: 4
    }
];




const arrumar = () => {
    for(let pessoa of lista) {
        pessoa.ID = lista.indexOf(pessoa);
    }
}

const remover = (indice) => {
    lista.splice(indice, 1)
    arrumar()
    return lista;
}

console.log(lista);
remover(2);
console.log(lista);

