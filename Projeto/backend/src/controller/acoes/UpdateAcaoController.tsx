import { Acao } from '@prisma/client';
import { prismaClient } from '../../database/client.js';

export class UpdateAcaoController {
    async handle(request: { body: { id: any; nome: any; descricao: any; ativos_id: any; }; }, response: { json: (arg0: Acao) => any; }) {
      
        const { id, nome, descricao, ativos_id } = request.body;

        const acao = await prismaClient.acao.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                descricao,
                ativo: {
                    connect: {
                        id: parseInt(ativos_id)
                    }
                }
            }
        });

        return response.json(acao);
    }
}