import { prismaClient } from '../../database/client.js'

export class GetAllLocalColetaController {

    async handle(request, response) {

        const localColeta = await prismaClient.localColeta.findMany({
            select: {
                id: true,
                nome: true,
                rua: true,
                numero: true,
                complemento: true,
                created_at: true,
                cidade: true
            }
        });

        console.log(localColeta);
        return response.json(localColeta);
    }
}