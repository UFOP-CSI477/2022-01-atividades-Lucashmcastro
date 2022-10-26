import { Ativo } from '.prisma/client';
import { prismaClient } from '../../database/client.js';

export class CreateAtivoController {

    async handle ( request: { body: { id: any; tipo: any; descricao: any; bolsas_id: any; }; }, response: { json: (arg0: Ativo) => any; }) {

        const { id, tipo, descricao, bolsas_id } = request.body;

        const ativo = await prismaClient.ativo.create({
            data: {
                id,
                tipo,
                descricao,
                bolsa: {
                    connect: {
                        id : parseInt(bolsas_id)
                    }
                }
            }
        });

        console.log(ativo);
        return response.json(ativo);
    }
}
