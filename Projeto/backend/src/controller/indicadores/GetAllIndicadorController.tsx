import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client.js'

export class GetAllIndicadorController {


    async handle(request: any, response: { json: (arg0: { id: number; nome: string; tipo: string; valor: string; bolsa: Bolsa; created_at: Date; }[]) => any; }) {

        const indicadores = await prismaClient.indicador.findMany({
            select: {
                id: true,
                nome: true,
                tipo: true,
                valor: true,
                bolsa: true,
                created_at:true
            }
        });

        console.log(indicadores);
        return response.json(indicadores);

    }

}