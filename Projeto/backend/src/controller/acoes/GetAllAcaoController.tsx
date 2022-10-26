import { Ativo } from '@prisma/client';
import { prismaClient } from '../../database/client.js'

export class GetAllAcaoController {


    async handle(request: any, response: { json: (arg0: { id: number; nome: string; descricao: string; created_at: Date; ativo: Ativo; }[]) => any; }) {

        const acoes = await prismaClient.acao.findMany({
            select: {
                id: true,
                nome: true,
                descricao: true,
                created_at:true,
                ativo: true
            }
        });

        console.log(acoes);
        return response.json(acoes);

    }

}