import express, { json } from 'express';
import { randomUUID } from 'crypto';
import { readFile, writeFile } from 'fs';

const app = express();

app.use(json());

let estados = [];
let cidades = [];
let doacoes = [];
let locaisColeta = [];
let pessoas = [];
let tiposSanguineos = [];

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

readFile("doacoes.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }else {
        doacoes = JSON.parse(data);
    }
})

readFile("locaisColeta.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }else {
        locaisColeta = JSON.parse(data);
    }
})


readFile("pessoas.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }else {
        pessoas = JSON.parse(data);
    }
})

readFile("tiposSanguineos.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }else {
        tiposSanguineos = JSON.parse(data);
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

//METODOS PARA ESTADO

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

//METODOS PARA CIDADES


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


//METODOS PARA DOACOES

app.post("/doacoes", (request, response) => {

    const { data, pessoa_id, local_id } = request.body;
    const doacao = { 
        data,
        pessoa_id, 
        local_id, 
        id: randomUUID(),
    }

    doacoes.push(doacao);
    doacaoFile();
    return response.json(doacao);
});

app.get("/doacoes", (request, response) =>{
    return response.json(doacoes);
});

app.get("/doacoes/:id", (request, response) => {
    const { id } = request.params;
    const doacao = doacoes.find((doacao) => doacao.id === id);
    return response.json(doacao);
});

app.put("/doacoes/:id", (request, response) => {
    const { id } = request.params;
    const { data, pessoa_id, local_id } = request.body; 

    const doacaoIndex = doacoes.findIndex((doacao) => doacao.id === id);
    doacoes[doacaoIndex] = {
        ...doacoes[doacaoIndex],
        data, 
        pessoa_id, 
        local_id,
    };

    doacaoFile();
    return response.json({ message: "Doação Alterada com Sucesso" });
});

app.delete("/doacoes/:id", (request, response) => {
    const { id } = request.params;

    const doacaoIndex = doacoes.findIndex((doacao) => doacao.id === id);

    doacoes.splice(doacaoIndex, 1);
    doacaoFile();
    return response.json({ message: "Doação Removida com Sucesso"});

});

function doacaoFile() {

    writeFile("doacoes.json", JSON.stringify(doacoes), (err) => {
        if (err) {
            console.log(err)
        }else {
            console.log("Doação Inserida");
        }
    });
};


//METODOS PARA LOCAL COLETA

app.post("/locaiscoleta", (request, response) => {

    const { name, rua, numero, complemento, cidade_id } = request.body;

    const localColeta = {
        name, 
        rua, 
        numero, 
        complemento, 
        cidade_id,
        id: randomUUID(),
    }

    locaisColeta.push(localColeta);
    locaisColetaFile();
    return response.json(localColeta);
});

app.get("/locaiscoleta", (request, response) =>{
    return response.json(locaisColeta);
});

app.get("/locaiscoleta/:id", (request, response) => {
    const { id } = request.params;
    const localColeta = locaisColeta.find((doacao) => doacao.id === id);
    return response.json(localColeta);
});

app.put("/locaiscoleta/:id", (request, response) => {
    const { id } = request.params;
    const { name, rua, numero, complemento, cidade_id } = request.body;

    const localColetaIndex = doacoes.findIndex((localColeta) => localColeta.id === id);
    locaisColeta[localColetaIndex] = {
        ...locaisColeta[localColetaIndex],
        name, 
        rua, 
        numero, 
        complemento, 
        cidade_id,
    };

    locaisColetaFile();
    return response.json({ message: "Local da Coleta Alterado com Sucesso" });
});

app.delete("/locaiscoleta/:id", (request, response) => {
    const { id } = request.params;

    const localColetaIndex = locaisColeta.findIndex((localColeta) => localColeta.id === id);

    locaisColeta.splice(localColetaIndex, 1);
    locaisColetaFile();
    return response.json({ message: "Local da Coleta Removido com Sucesso"});

});

function locaisColetaFile(){

    writeFile("locaiscoleta.json", JSON.stringify(locaisColeta), (err) => {
        if (err) {
            console.log(err)
        }else {
            console.log("Local Coleta Inserido");
        }
    });
};


//METODOS PARA PESSOA

app.post("/pessoas", (request, response) => {

    const { name, rua, numero, complemento, documento, cidade_id, tipo_id } = request.body;

    const pessoa = {
        name, 
        rua, 
        numero, 
        complemento,
        documento, 
        cidade_id,
        tipo_id,
        id: randomUUID(),
    }

    pessoas.push(pessoa);
    pessoasFile();
    return response.json(pessoa);
});

app.get("/pessoas", (request, response) =>{
    return response.json(pessoas);
});

app.get("/pessoas/:id", (request, response) => {
    const { id } = request.params;
    const pessoa = pessoas.find((pessoa) => pessoa.id === id);
    return response.json(pessoa);
});

app.put("/pessoas/:id", (request, response) => {
    const { id } = request.params;
    const { name, rua, numero, complemento, documento, cidade_id, tipo_id } = request.body;


    const pessoaIndex = pessoas.findIndex((pessoa) => pessoa.id === id);
    pessoas[pessoaIndex] = {
        ...pessoas[pessoaIndex],
        name, 
        rua, 
        numero, 
        complemento,
        documento, 
        cidade_id,
        tipo_id,
    };

    pessoasFile();
    return response.json({ message: "Pessoa Alterada com Sucesso" });
});

app.delete("/pessoas/:id", (request, response) => {
    const { id } = request.params;

    const pessoaIndex = pessoas.findIndex((pessoa) => pessoa.id === id);

    pessoas.splice(pessoaIndex, 1);
    pessoasFile();
    return response.json({ message: "Pessoa Removida com Sucesso"});

});

function pessoasFile(){

    writeFile("pessoas.json", JSON.stringify(pessoas), (err) => {
        if (err) {
            console.log(err)
        }else {
            console.log("Pessoa Inserida");
        }
    });
};


//METODOS PARA TIPO SANGUINEO

app.post("/tiposSanguineos", (request, response) => {

    const { tipo, fator } = request.body;

    const tipoSanguineo = {     
        tipo,
        fator,
        id: randomUUID(),
    }

    tiposSanguineos.push(tipoSanguineo);
    tiposSanguineosFile();
    return response.json(tipoSanguineo);
});

app.get("/tiposSanguineos", (request, response) =>{
    return response.json(tiposSanguineos);
});

app.get("/tiposSanguineos/:id", (request, response) => {
    const { id } = request.params;
    const tipoSanguineo = tiposSanguineos.find((tipoSanguineo) => tipoSanguineo.id === id);
    return response.json(tipoSanguineo);
});

app.put("/tiposSanguineos/:id", (request, response) => {
    const { id } = request.params;
    const { tipo, fator } = request.body;

    const tipoSanguineoIndex = tiposSanguineos.findIndex((tipoSanguineo) => tipoSanguineo.id === id);
    tiposSanguineos[tipoSanguineoIndex] = {
        ...tiposSanguineos[tipoSanguineoIndex],
        tipo,
        fator,
    };

    tiposSanguineosFile();
    return response.json({ message: "Tipo Sanguineo Alterado com Sucesso" });
});

app.delete("/tiposSanguineos/:id", (request, response) => {
    const { id } = request.params;

    const tipoSanguineoIndex = tiposSanguineos.findIndex((tipoSanguineo) => tipoSanguineo.id === id);

    tiposSanguineos.splice(tipoSanguineoIndex, 1);
    tiposSanguineosFile();
    return response.json({ message: "Tipo Sanguineo Removido com Sucesso"});

});

function tiposSanguineosFile(){

    writeFile("tiposSanguineos.json", JSON.stringify(tiposSanguineos), (err) => {
        if (err) {
            console.log(err)
        }else {
            console.log("Tipo Sanguineo Inserido");
        }
    });
};

app.listen(4002, () => console.log("Servidor rodando na porta 4002"));