import { prismaClient } from '../../database/client.js';

export class CreateEstadoController {

    async handle(request, response){
        
        let { id, nome, sigla } = request.body;
        
        const estado = await prismaClient.estado.create({
            data: { 
                id,
                nome,
                sigla
            }
        });

        console.log(estado);
        return response.json(estado);
    } 
}

