import { prismaClient } from '../../database/client.js';

export class UpdateDoacaoController {
    async handle(request, response) {
      
        const { id, data, pessoa_id, local_id } = request.body;

        const doacao = await prismaClient.doacao.update({

            where: {
                id: id
            },
            data: {
                data,
                pessoa: {
                    connect: {
                        id: pessoa_id
                    }
                },
                local: {
                    connect: {
                        id: local_id
                    }
                }
            }
        });

        return response.json(doacao);
    }
}