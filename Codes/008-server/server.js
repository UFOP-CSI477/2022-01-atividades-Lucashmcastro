const http = require("http");

http
    .createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json' });

    if(request.url === '/produto') {
        response.end(
            JSON.stringify({
                message: "Rota de Produto"
            })
        );
    }
    
    if(request.url === '/usuario') {
        response.end(
            JSON.stringify({
                message: "Rota de Usuário"
            })
        );
    }

        response.end(
            JSON.stringify({
                message: "Qualquer outra Rota"
            })
        );
    


})      
.listen(4001, () => console.log("Servidor rodando na porta 4001")); 