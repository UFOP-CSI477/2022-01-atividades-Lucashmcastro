import { prismaClient } from '../../database/client.js';

export class GetByIdDistribuicaoController{

    async handle( request, response){

        const { id } = request.params;

        const distribuicao = await prismaClient.distribuicoes.findUnique({
            where: { 
                id : parseInt(id)
            }
        });

        console.log(distribuicao);
        return response.json(distribuicao);
    }
}