import { prismaClient } from '../../database/client.js';

export class CreateEstadoController {

    async handle(request, response){
        
        let { nome, sigla } = request.body;
        
        const estado = await prismaClient.estado({
            data: { 
                nome,
                sigla,
            }
        });

        console.log(estado);
        return response.json(estado);
    } 
}

