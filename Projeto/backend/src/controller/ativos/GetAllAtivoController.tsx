import { Ativo, Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client.js'

export class GetAllAtivoController {


    async handle(request: any, response: { json: (arg0: { id: number; tipo: string; descricao: string; created_at: Date; bolsa: Bolsa; }[]) => any; }) {

        const ativos = await prismaClient.ativo.findMany({
            select: {
                id: true,
                tipo: true,
                descricao: true,
                created_at:true,
                bolsa: true
            }
        });

        console.log(ativos);
        return response.json(ativos);

    }

}