import { Ativo } from '@prisma/client';
import { prismaClient } from '../../database/client.js';

export class UpdateAtivoController {
    async handle(request: { body: { id: any; tipo: any; descricao: any; bolsas_id: any; }; }, response: { json: (arg0: Ativo) => any; }) {
      
        const { id, tipo, descricao, bolsas_id } = request.body;

        const ativo = await prismaClient.ativo.update({

            where: {
                id: parseInt(id)
            },
            data: {
                tipo,
                descricao,
                bolsa: {
                    connect: {
                        id: parseInt(bolsas_id)
                    }
                }
            }
        });

        return response.json(ativo);
    }
}