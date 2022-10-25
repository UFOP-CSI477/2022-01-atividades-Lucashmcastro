import { prismaClient } from '../../database/client.js';

export class GetByIdDistribuicaoController{

    async handle( request, response){

        const { id } = request.params;

        const distribuicao = await prismaClient.distribuicoes.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                date: true,
                created_at: true,
                produto: true,
                unidade: true
            }
            });

        console.log(distribuicao);
        return response.json(distribuicao);
    }
}