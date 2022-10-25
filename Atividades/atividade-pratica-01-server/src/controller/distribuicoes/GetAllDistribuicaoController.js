import { prismaClient } from '../../database/client.js';

export class GetAllDistribuicaoController {
    
    async handle(request, response){
       
        const distribuicao = await prismaClient.distribuicoes.findMany({
            select: {
                id: true,
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