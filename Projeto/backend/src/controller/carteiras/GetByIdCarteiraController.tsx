import { Ativo } from '@prisma/client';
import { prismaClient } from '../../database/client.js';

export class GetByIdCarteiraController{

    async handle( request: { params: { id: any; }; }, response: { json: (arg0: { id: number; nome: string; cpf: string; status: string; created_at: Date; ativo: Ativo; } | null) => any; }){

        const { id } = request.params;

        const carteira = await prismaClient.carteira.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                nome: true,
                cpf: true,
                status: true,
                created_at: true,
                ativo: true
            }

        });

        console.log(carteira);
        return response.json(carteira);
    }
}