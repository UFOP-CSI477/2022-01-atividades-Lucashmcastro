import { prismaClient } from '../../database/client.js';

export class GetByIdLocalColetaController{

    async handle( request, response){

        const { id } = request.params;

        const localColeta = await prismaClient.localColeta.findUnique({
            where: { 
                id : parseInt(id)
            }
        });

        console.log(localColeta);
        return response.json(localColeta);
    }
}