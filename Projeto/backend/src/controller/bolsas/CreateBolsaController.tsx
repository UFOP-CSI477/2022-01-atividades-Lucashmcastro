import { Bolsa } from '.prisma/client';
import { prismaClient } from '../../database/client.js';

export class CreateBolsaController {

    async handle ( request: { body: { id: any; nome: any; origem: any; status: any; }; }, response: { json: (arg0: Bolsa) => any; }) {

        const { id, nome, origem, status } = request.body;

        const bolsa = await prismaClient.bolsa.create({
            data: {
                id,
                nome,
                origem,
                status
            }
        });

        console.log(bolsa);
        return response.json(bolsa);
    }
}
