import { Ativo } from '@prisma/client';
import { prismaClient } from '../../database/client.js';

export class GetByIdAcaoController{

    async handle( request: { params: { id: any; }; }, response: { json: (arg0: { id: number; nome: string; descricao: string; created_at: Date; ativo: Ativo; } | null) => any; }){

        const { id } = request.params;

        const acao = await prismaClient.acao.findUnique({
            where: { 
                id : parseInt(id)
            },
            select: { 
                id: true,
                nome: true,
                descricao: true,
                created_at: true,
                ativo: true
            }

        });

        console.log(acao);
        return response.json(acao);
    }
}