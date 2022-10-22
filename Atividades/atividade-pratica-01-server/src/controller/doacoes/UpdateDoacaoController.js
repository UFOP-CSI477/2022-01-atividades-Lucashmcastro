import { prismaClient } from '../../database/client.js';

export class UpdateDoacaoController {
    async handle(request, response) {
      
        const { id, data, pessoa_id, local_id } = request.body;

        const doacao = await prismaClient.doacao.update({

            where: {
                id: parseInt(id)
            },
            data: {
                data,
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