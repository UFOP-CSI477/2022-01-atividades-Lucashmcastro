import express, { json } from 'express';
import { randomUUID } from 'crypto';
import { readFile, writeFile } from 'fs';

const app = express();

app.use(json());

let estados = [];

readFile("estados.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }else {
        estados = JSON.parse(data);
    }
})



/*
POST => Inserção de Dado
GET => Buscar um Dado
PUT => Alterar um Dado
DELETE => Remover um dado
*/

/*
Body => enviar dados da aplicação 
Params => /products/13123123123123
Query => /products?id=234234234234234234&value=234234234234
*/

app.post("/estados", (request, response) => {
    //nome e sigla => name  and price

    const { name, sigla } = request.body;

    const estado = { 
        name,
        sigla,
        id: randomUUID(),
    }

    estados.push(estado);
    estadoFile();
    return response.json(estado);
});

app.get("/estados", (request, response) => {
    return response.json(estados);
});

app.get("/estados/:id", (request, response) => {
    const { id } = request.params;
    const estado = estados.find((estado) => estado.id === id);
    return response.json(estado);

});

app.put("/estados/:id", (request, response) => {
    const { id } = request.params;
    const { name, sigla } = request.body;

    const estadoIndex = estados.findIndex((estado) => estado.id === id);
    estados[estadoIndex] = {
        ...estados[estadoIndex],
        name, 
        sigla,
    };

    estadoFile();
    return response.json({ message: "Estado Alterado com Sucesso" });

});

app.delete("/estados/:id", (request, response) => {
    const { id } = request.params;

    const estadoIndex = estados.findIndex((estado) => estado.id === id);

    estados.splice(estadoIndex, 1);
    estadoFile();
    return response.json({ message: "Estado Removido com Sucesso"});

});

function estadoFile() {

    writeFile("estados.json", JSON.stringify(estados), (err) => {
        if (err) {
            console.log(err)
        }else {
            console.log("Estado Inserido");
        }
    });
}

app.listen(4002, () => console.log("Servidor rodando na porta 4002"));