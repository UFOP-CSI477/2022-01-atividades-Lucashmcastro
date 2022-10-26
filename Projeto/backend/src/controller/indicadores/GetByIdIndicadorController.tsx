import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client.js';

export class GetByIdIndicadorController{

    async handle( request: { params: { id: any; }; }, response: { json: (arg0: { id: number; nome: string; tipo: string; valor: string; created_at: Date; bolsa: Bolsa; } | null) => any; }){

        const { id } = request.params;

        const indicador = await prismaClient.indicador.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                nome: true,
                tipo: true,
                valor: true,
                created_at: true,
                bolsa: true
            }

        });

        console.log(indicador);
        return response.json(indicador);
    }
}