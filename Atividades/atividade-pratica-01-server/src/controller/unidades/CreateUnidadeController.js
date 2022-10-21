import { prismaClient } from '../../database/client.js';

export class CreateUnidadeController {

    async handle ( request, response) {

        const { id, nome, numero, complemento, cidade_id } = request.body;

        const unidade = await prismaClient.unidade.create({
            data: {
                id,
                nome,
                numero,
                complemento,           
                cidade: {
                    connect: {
                        id : cidade_id
                    }
                }
            }
        });

        console.log(unidade);
        return response.json(unidade);
    }
}
