import { Cotacao } from '@prisma/client';
import { prismaClient } from '../../database/client.js';
import { getDateBR } from '../../util/GetDateBR.js';

export class UpdateCotacaoController {
    async handle(request: { body: { id: any; valor: any; date: any; empresa_id: any; bolsa_id: any; }; }, response: { json: (arg0: Cotacao) => any; }) {
      
        const { id, valor, date, empresa_id, bolsa_id } = request.body;

        const cotacao = await prismaClient.cotacao.update({

            where: {
                id: parseInt(id)
            },
            data: {
                date: getDateBR(date),
                valor,
                empresa: {
                    connect: {
                        id: parseInt(empresa_id)
                    }
                },
                bolsa: {
                    connect: {
                        id: parseInt(bolsa_id)
                    }
                }
            }
        });

        return response.json(cotacao);
    }
}