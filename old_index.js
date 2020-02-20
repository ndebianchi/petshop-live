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
            

            case '/pets/add':
                let novoPet = queryString;
                
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