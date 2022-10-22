import { prismaClient } from '../../database/client.js';

export class UpdateUnidadeController {
    async handle(request, response) {

        const { id, nome, numero, complemento, cidade_id } = request.body;

        const unidade = await prismaClient.unidade.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                numero,
                complemento,
                cidade: {
                    connect: {
                        id: parseInt(cidade_id)
                    }
                }
            }
        });

        return response.json(unidade);
    }
}

