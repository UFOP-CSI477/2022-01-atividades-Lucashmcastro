import { prismaClient } from '../../database/client.js';

export class UpdateDistribuicaoController {
    async handle(request, response) {
      
        const { id, data, produto_id, unidade_id } = request.body;

        const distribuicao = await prismaClient.distribuicoes.update({

            where: {
                id: parseInt(id)
            },
            data: {
                data,
                produto: {
                    connect: {
                        id: parseInt(produto_id)
                    }
                },
                unidade: {
                    connect: {
                        id: parseInt(unidade_id)
                    }
                }
            }
        });

        return response.json(distribuicao);
    }
}