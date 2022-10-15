import { prismaClient } from '../../database/client.js';

export class GetAllDoacaoController {

    
    async handle(request, response){
       
        const doacao = await prismaClient.doacao.findMany({
            select: {
                id: true,
                data: true,
                created_at: true,
                local: true,
                pessoa: true
            }
        });

        console.log(doacao);
        return response.json(doacao);
    }
}