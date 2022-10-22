import { prismaClient } from '../../database/client.js';

export class CreateLocalColetaController {

    async handle ( request, response ){

    const { id, nome, rua, numero, complemento, cidade_id } = request.body;

    const localColeta = await prismaClient.localColeta.create({
        data: {
            id,
            nome,
            rua,
            numero,
            complemento,
            cidade: {
                connect: {
                    id: parseInt(cidade_id)
                }
            }
        }
    });

    console.log(localColeta);
    return response.json(localColeta)
    }
}