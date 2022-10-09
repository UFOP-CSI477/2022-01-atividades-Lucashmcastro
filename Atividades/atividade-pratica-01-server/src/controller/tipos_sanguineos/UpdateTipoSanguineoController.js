import { prismaClient } from '../../database/client.js';

export class UpdateTipoSanguineoController {
    async handle(request, response) {

        const { id, tipo, fator } = request.body;

        const tipoSanguineo = await prismaClient.tipoSanguineo.update({

            where: {
                id: id
            },
            data: {
                tipo,
                fator
            }
        });

        return response.json(tipoSanguineo);
    }
}