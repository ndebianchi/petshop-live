const http = require('http');
const url = require('url')
const petshop = require('./petshop');

const server = http
    .createServer((req, res) => {
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=UTF-8"
        })
        let urlCompleta = url.parse(req.url, true);
        let queryString = urlCompleta.query;
        let rota = urlCompleta.pathname;


        switch (rota) {
            case '/pets':
                let conteudo = petshop.listarPets();
                if (conteudo.length > 21) {
                    res.write(conteudo);
                } else {
                    res.write("Não há pets registrados no sistema");
                }
                break;

            case '/pets/add':
                let novoPet = queryString;
                if (Object.entries(novoPet).length > 0) {
                    if (petshop.adicionarPet(novoPet)) {
                        res.write(`${novoPet.nome} foi adicionado com sucesso`)
                    } else {
                        res.write("Insira um pet válido. Veja como em /pets/add")
                    };
                } else {
                    res.write(`
                Como inserir um Pet válido na Url.

                Formatação:
                ?nome=NOME&tipo=TIPO&idade=IDADE

                Campos Obrigatórios:
                Nome = Primeiro nome do Pet.
                Tipo = Gato, Cachorro, Pássaro, etc.
                Idade = Quantos anos ele tem.

                Campos Adicionais:
                Raça = Raça do Pet
                Gênero = M ou F`);
                }
                break;

            case '/pets/search':
                res.write("busca pets");
                break;
            default:
                res.write("404 Ta perdido bro?");
                break;
        }

        res.end();
    })
    .listen(3000, 'localhost', () =>
        console.log("Server rodando"));