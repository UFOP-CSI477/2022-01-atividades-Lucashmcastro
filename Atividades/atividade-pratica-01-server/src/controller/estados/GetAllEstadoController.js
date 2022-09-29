import { prismaClient } from '../../database/client.js';

export class GetAllEstadoController {


    async handle(request, response) {

        const estados = await prismaClient.estado.findMany({
            include: {
                id: true,
                nome: true,
                sigla: true,
                created_at: true,
                cidade: true
            }
        });

        console.log(estados);
        return response.json(estados);

    }
}