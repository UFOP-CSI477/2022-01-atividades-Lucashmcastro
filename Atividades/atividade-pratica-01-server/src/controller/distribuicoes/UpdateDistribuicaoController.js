import { prismaClient } from '../../database/client.js';
import { getDateBR } from '../../util/getDateBr.js';


export class UpdateDistribuicaoController {
    async handle(request, response) {
      
        const { id, date, produto_id, unidade_id } = request.body;

        const distribuicao = await prismaClient.distribuicoes.update({

            where: {
                id: parseInt(id)
            },
            data: {
                date: getDateBR(date),
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