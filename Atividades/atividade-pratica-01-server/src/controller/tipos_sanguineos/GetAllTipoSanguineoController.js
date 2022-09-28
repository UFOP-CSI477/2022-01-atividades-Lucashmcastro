import { prismaClient } from '../../database/client.js';

export class GetAllTipoSanguineoController {

    async handle(request, response) {
        const tipoSanguineo = await prismaClient.tipoSanguineo.findMany({
            include: {
                tipoSanguineo : true
            }
        });

        return response.json(tipoSanguineo);
    }
}