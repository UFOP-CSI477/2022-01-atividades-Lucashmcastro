import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client.js';

export class UpdateBolsaController {
    async handle(request: { body: { id: any; nome: any; origem: any; status: any; }; }, response: { json: (arg0: Bolsa) => any; }) {
      
        const { id, nome, origem, status } = request.body;

        const bolsa = await prismaClient.bolsa.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                origem,
                status
            }
        });

        return response.json(bolsa);
    }
}