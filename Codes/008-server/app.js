const express = require('express');
const { randomUUID } = require('crypto');
const fs = require('fs');

const app = express();

app.use(express.json());

let products = [];

fs.readFile("products.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }else {
        products = JSON.parse(data);
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

app.post("/products", (request, response) => {
    //nome e preco => name  and price

    const { name, price } = request.body;

    const product = { 
        name,
        price,
        id: randomUUID(),
    }

    products.push(product);
    productFile();
    return response.json(product);
});

app.get("/products", (request, response) => {
    return response.json(products);
});

app.get("/products/:id", (request, response) => {
    const { id } = request.params;
    const product = products.find((product) => product.id === id);
    return response.json(product);

});

app.put("/products/:id", (request, response) => {
    const { id } = request.params;
    const { name, price } = request.body;

    const productIndex = products.findIndex((product) => product.id === id);
    products[productIndex] = {
        ...products[productIndex],
        name, 
        price,
    };

    productFile();
    return response.json({ message: "Produto Alterado com Sucesso" });

});

app.delete("/products/:id", (request, response) => {
    const { id } = request.params;

    const productIndex = products.findIndex((product) => product.id === id);

    products.splice(productIndex, 1);
    productFile();
    return response.json({ message: "Produto Removido com Sucesso"});

});

function productFile() {

    fs.writeFile("products.json", JSON.stringify(products), (err) => {
        if (err) {
            console.log(err)
        }else {
            console.log("Produto Inserido");
        }
    });
}




app.listen(4002, () => console.log("Servidor rodando na porta 4002"));