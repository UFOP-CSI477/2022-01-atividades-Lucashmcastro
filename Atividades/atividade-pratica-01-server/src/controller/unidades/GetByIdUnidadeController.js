import { prismaClient } from '../../database/client.js';

export class GetByIdUnidadeController{

    async handle( request, response){

        const { id } = request.params;

        const unidade = await prismaClient.unidade.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                nome: true, 
                numero: true, 
                complemento: true,               
                created_at:true,
                cidade: true
            }

        });

        console.log(unidade);
        return response.json(unidade);
    }
}

