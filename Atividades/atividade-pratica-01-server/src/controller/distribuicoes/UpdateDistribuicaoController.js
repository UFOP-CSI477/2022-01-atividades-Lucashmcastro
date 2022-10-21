import { prismaClient } from '../../database/client.js';

export class UpdateDistribuicaoController {
    async handle(request, response) {
      
        const { id, data, produto_id, unidade_id } = request.body;

        const distribuicao = await prismaClient.distribuicoes.update({

            where: {
                id: id
            },
            data: {
                data,
                produto: {
                    connect: {
                        id: produto_id
                    }
                },
                unidade: {
                    connect: {
                        id: unidade_id
                    }
                }
            }
        });

        return response.json(distribuicao);
    }
}