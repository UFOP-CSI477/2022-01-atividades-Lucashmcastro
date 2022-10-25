import { prismaClient } from '../../database/client.js';
import { getDateBR } from '../../util/getDateBr.js';
export class CreateDoacaoController {

    async handle (request, response){

        const { id, date, pessoa_id, local_id } = request.body;

        const doacao = await prismaClient.doacao.create({
            data: {
                id,
                date: getDateBR(date),
                pessoa: {
                    connect: {
                        id: parseInt(pessoa_id)
                    }
                }, 
                local: {
                    connect: {
                        id: parseInt(local_id)
                    }
                }
            }
        });

        console.log(doacao);
        return response.json(doacao);
    }
}