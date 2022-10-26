import { Empresa, Bolsa } from '@prisma/client';
import { prismaClient } from '../../database/client.js'

export class GetAllCotacaoController {


    async handle(request: any, response: { json: (arg0: { id: number; valor: string; date: Date; empresa: Empresa; bolsa: Bolsa; created_at: Date; }[]) => any; }) {

        const cotacoes = await prismaClient.cotacao.findMany({
            select: {
                id: true,
                valor: true,
                date: true,
                empresa: true,
                bolsa: true,
                created_at:true
            }
        });

        console.log(cotacoes);
        return response.json(cotacoes);

    }

}