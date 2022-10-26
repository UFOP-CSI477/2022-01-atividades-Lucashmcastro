import { Carteira } from '.prisma/client';
import { prismaClient } from '../../database/client.js';

export class CreateCarteiraController {

    async handle ( request: { body: { id: any; nome: any; cpf: any; status: any; ativos_id: any; }; }, response: { json: (arg0: Carteira) => any; }) {

        const { id, nome, cpf, status, ativos_id } = request.body;

        const carteira = await prismaClient.carteira.create({
            data: {
                id,
                nome,
                cpf,
                status,
                ativo: {
                    connect: {
                        id : parseInt(ativos_id)
                    }
                }
            }
        });

        console.log(carteira);
        return response.json(carteira);
    }
}
