import { prismaClient } from '../../database/client.js';

export class CreateProdutoController {

    async handle ( request, response) {

        const { id, etiqueta, validade, doacao_id } = request.body;

        const produto = await prismaClient.produto.create({
            data: {
                id,
                etiqueta,
                validade,
                doacao: {
                    connect: {
                        id :parseInt(doacao_id)
                    }
                }
            }
        });

        console.log(produto);
        return response.json(produto);
    }
}
