import { prismaClient } from '../../database/client.js';

export class GetByIdTipoSanguineoController{

    async handle( request, response){

        const { id } = request.params;

        const tipoSanguineo = await prismaClient.tipoSanguineo.findUnique({
            where: { 
                id : parseInt(id)
            }
        })
        return response.json(tipoSanguineo);
    }
}