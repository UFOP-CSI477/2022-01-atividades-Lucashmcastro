import { prismaClient } from '../../database/client.js';
import { getDateBR } from '../../util/getDateBr.js';
export class UpdateProdutoController {
    async handle(request, response) {

        const { id, etiqueta, validade, doacao_id } = request.body;

        const produto = await prismaClient.produto.update({

            where: {
                id: parseInt(id)
            },
            data: {
                etiqueta,
                validade: getDateBR(validade),
                doacao: {
                    connect: {
                        id: parseInt(doacao_id)
                    }
                }
            }
        });

        return response.json(produto);
    }
}