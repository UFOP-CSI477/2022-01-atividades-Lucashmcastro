import { prismaClient } from '../../database/client.js';

export class UpdateCidadeController {
    async handle(request, response) {

        const { id, nome, estado_id } = request.body;

        const cidade = await prismaClient.cidade.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                estado: {
                    connect: {
                        id: parseInt(estado_id)
                    }
                }
            }
        });

        return response.json(cidade);
    }
}