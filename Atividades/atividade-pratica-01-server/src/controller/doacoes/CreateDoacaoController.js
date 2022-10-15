import { prismaClient } from '../../database/client.js';

export class CreateDoacaoController {

    async handle (request, response){

        const { id, data, pessoa_id, local_id } = request.body;

        const doacao = await prismaClient.doacao.create({
            data: {
                id,
                data,
                pessoa: {
                    connect: {
                        id: pessoa_id
                    }
                }, 
                local: {
                    connect: {
                        id: local_id
                    }
                }
            }
        });

        console.log(doacao);
        return response.json(doacao);
    }
}