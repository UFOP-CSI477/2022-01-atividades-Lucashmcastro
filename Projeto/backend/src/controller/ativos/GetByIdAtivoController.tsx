import { Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client.js';

export class GetByIdAtivoController{

    async handle( request: { params: { id: any; }; }, response: { json: (arg0: { id: number; tipo: string; descricao: string; created_at: Date; bolsa: Bolsa; } | null) => any; }){

        const { id } = request.params;

        const ativo = await prismaClient.ativo.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                tipo: true,
                descricao: true,
                created_at: true,
                bolsa: true
            }

        });

        console.log(ativo);
        return response.json(ativo);
    }
}