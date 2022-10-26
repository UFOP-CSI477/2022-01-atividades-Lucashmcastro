import { Indicador } from '@prisma/client';
import { prismaClient } from '../../database/client.js';

export class UpdateIndicadorController {
    async handle(request: { body: { id: any; nome: any; tipo: any; valor: any; bolsa_id: any; }; }, response: { json: (arg0: Indicador) => any; }) {
      
        const { id, nome, tipo, valor, bolsa_id } = request.body;

        const indicador = await prismaClient.indicador.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                tipo,
                valor,
                bolsa: {
                    connect: {
                        id: parseInt(bolsa_id)
                    }
                }
            }
        });

        return response.json(indicador);
    }
}