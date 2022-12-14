import { prismaClient } from '../../database/client.js';

export class CreateCidadeController {

    async handle ( request, response) {

        const { id, nome, estado_id } = request.body;

        const cidade = await prismaClient.cidade.create({
            data: {
                id,
                nome,
                estado: {
                    connect: {
                        id : parseInt(estado_id)
                    }
                }
            }
        });

        console.log(cidade);
        return response.json(cidade);
    }
}
