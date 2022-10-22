import { prismaClient } from '../../database/client.js';

export class UpdateEstadoController {
    async handle(request, response) {
          
        const { id, nome, sigla } = request.body;

        const estado = await prismaClient.estado.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                sigla,                              
            }
        });

        return response.json(estado);
    }
}