import { Empresa, Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client.js';

export class GetByIdCotacaoController{

    async handle( request: { params: { id: any; }; }, response: { json: (arg0: { id: number; valor: string; date: Date; created_at: Date; empresa: Empresa; bolsa: Bolsa; } | null) => any; }){

        const { id } = request.params;

        const cotacao = await prismaClient.cotacao.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                valor: true,
                date: true,
                created_at: true,
                empresa: true,
                bolsa: true
            }

        });

        console.log(cotacao);
        return response.json(cotacao);
    }
}