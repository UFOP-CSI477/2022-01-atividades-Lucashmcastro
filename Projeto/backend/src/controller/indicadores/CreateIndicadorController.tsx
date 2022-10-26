import { Indicador } from '.prisma/client';
import { prismaClient } from '../../database/client.js';

export class CreateIndicadorController {

    async handle ( request: { body: { id: any; nome: any; tipo: any; valor: any; bolsa_id: any; }; }, response: { json: (arg0: Indicador) => any; }) {

        const { id, nome, tipo, valor, bolsa_id } = request.body;

        const indicador = await prismaClient.indicador.create({
            data: {
                id,
                nome,
                tipo,
                valor,
                bolsa: {
                    connect: {
                        id : parseInt(bolsa_id)
                    }
                }
            }
        });

        console.log(indicador);
        return response.json(indicador);
    }
}
