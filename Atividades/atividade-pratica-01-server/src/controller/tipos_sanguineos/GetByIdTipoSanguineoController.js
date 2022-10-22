import { prismaClient } from '../../database/client.js';

export class GetByIdTipoSanguineoController{

    async handle( request, response){

        const { id } = request.params;

        const tipoSanguineo = await prismaClient.tipoSanguineo.findUnique({
            where: { 
                id : parseInt(id)
            },
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