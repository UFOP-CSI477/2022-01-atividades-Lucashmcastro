import { prismaClient } from '../../database/client.js';
import { getDateBR } from '../../util/getDateBr.js';

export class UpdateDoacaoController {
    async handle(request, response) {
      
        const { id, date, pessoa_id, local_id } = request.body;

        const doacao = await prismaClient.doacao.update({

            where: {
                id: parseInt(id)
            },
            data: {
                date: getDateBR(date),
                pessoa: {
                    connect: {
                        id: parseInt(pessoa_id)
                    }
                },
                local: {
                    connect: {
                        id: parseInt(local_id)
                    }
                }
            }
        });

        return response.json(doacao);
    }
}