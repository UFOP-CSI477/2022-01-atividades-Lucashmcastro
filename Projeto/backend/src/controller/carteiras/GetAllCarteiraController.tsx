import { Ativo } from '@prisma/client';
import { prismaClient } from '../../database/client.js'

export class GetAllCarteiraController {


    async handle(request: any, response: { json: (arg0: { id: number; nome: string; cpf: string; status: string; ativo: Ativo; created_at: Date; }[]) => any; }) {

        const carteiras = await prismaClient.carteira.findMany({
            select: {
                id: true,
                nome: true,
                cpf: true,
                status: true,
                ativo: true,
                created_at:true
            }
        });

        console.log(carteiras);
        return response.json(carteiras);

    }

}