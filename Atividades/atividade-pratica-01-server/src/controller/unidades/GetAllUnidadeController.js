import { prismaClient } from '../../database/client.js'

export class GetAllUnidadeController {


    async handle(request, response) {

        const unidades = await prismaClient.unidade.findMany({
            select: {
                id: true,
                nome: true, 
                numero: true, 
                complemento: true,               
                created_at:true,
                cidade: true
            }
        });

        console.log(unidades);
        return response.json(unidades);

    }

}