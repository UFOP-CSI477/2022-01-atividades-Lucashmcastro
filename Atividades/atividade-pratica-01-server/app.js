import express, { json } from 'express';
import { randomUUID } from 'crypto';
import { readFile, writeFile } from 'fs';

const app = express();

app.use(json());

let estados = [];
let cidades = [];

readFile("estados.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }else {
        estados = JSON.parse(data);
    }
})

readFile("cidades.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }else {
        cidades = JSON.parse(data);
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

//metodos para estados

app.post("/estados", (request, response) => {
    //nome e sigla => name  and sigla

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
};

//metodos para cidades


app.post("/cidades", (request, response) => {

    const { name, estado_id } = request.body;
    const cidade = { 
        name, 
        estado_id, 
        id: randomUUID(),
    }

    cidades.push(cidade);
    cidadeFile();
    return response.json(cidade);
});

app.get("/cidades", (request, response) =>{
    return response.json(cidades);
});

app.get("/cidades/:id", (request, response) => {
    const { id } = request.params;
    const cidade = cidades.find((cidade) => cidade.id === id);
    return response.json(cidade);
});

app.put("/cidades/:id", (request, response) => {
    const { id } = request.params;
    const { name, estado_id } = request.body;

    const cidadeIndex = cidades.findIndex((cidade) => cidade.id === id);
    cidades[cidadeIndex] = {
        ...cidades[cidadeIndex],
        name, 
        estado_id,
    };

    cidadeFile();
    return response.json({ message: "Cidade Alterada com Sucesso" });
});

app.delete("/cidades/:id", (request, response) => {
    const { id } = request.params;

    const cidadeIndex = cidades.findIndex((cidade) => cidade.id === id);

    cidades.splice(cidadeIndex, 1);
    cidadeFile();
    return response.json({ message: "Cidade Removida com Sucesso"});

});

function cidadeFile() {

    writeFile("cidades.json", JSON.stringify(cidades), (err) => {
        if (err) {
            console.log(err)
        }else {
            console.log("Cidade Inserida");
        }
    });
};

app.listen(4002, () => console.log("Servidor rodando na porta 4002"));