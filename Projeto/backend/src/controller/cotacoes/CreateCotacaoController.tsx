import { Cotacao } from '.prisma/client';
import { prismaClient } from '../../database/client.js';
import { getDateBR } from '../../util/GetDateBR.js';

export class CreateCotacaoController {

    async handle ( request: { body: { id: any; valor: any; date: any; empresa_id: any; bolsa_id: any; }; }, response: { json: (arg0: Cotacao) => any; }) {

        const { id, valor, date, empresa_id, bolsa_id } = request.body;

        const cotacao = await prismaClient.cotacao.create({
            data: {
                id,
                valor,
                date: getDateBR(date),
                empresa: {
                    connect: {
                        id : parseInt(empresa_id)
                    }
                },
                bolsa: {
                    connect: {
                        id : parseInt(bolsa_id)
                    }
                }
            }
        });

        console.log(cotacao);
        return response.json(cotacao);
    }
}
