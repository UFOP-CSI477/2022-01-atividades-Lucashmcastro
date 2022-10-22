import { prismaClient } from '../../database/client.js';

export class UpdateLocalColetaController {
    async handle(request, response) {
          
        const { id, nome, rua, numero, complemento, cidade_id } = request.body;

        const localColeta = await prismaClient.localColeta.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                rua,
                numero,
                complemento,
                cidade: {
                    connect: {
                        id: parseInt(cidade_id)
                    }
                }
            }
        });

        return response.json(localColeta);
    }
}