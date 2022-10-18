import { prismaClient } from '../../database/client.js';

export class GetAllTipoSanguineoController {

    async handle(request, response) {

        const tipoSanguineo = await prismaClient.tipoSanguineo.findMany({
            select: {
                id: true,
                tipo: true,
                fator: true,
                created_at: true
            }
        });

        console.log(tipoSanguineo);
        return response.json(tipoSanguineo);
    }
}