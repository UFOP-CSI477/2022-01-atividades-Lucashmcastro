import { prismaClient } from '../../database/client.js';

export class UpdateProdutoController {
    async handle(request, response) {

        const { id, etiqueta, validade, doacao_id } = request.body;

        const produto = await prismaClient.produto.update({

            where: {
                id: id
            },
            data: {
                etiqueta,
                validade,
                doacao: {
                    connect: {
                        id: doacao_id
                    }
                }
            }
        });

        return response.json(produto);
    }
}