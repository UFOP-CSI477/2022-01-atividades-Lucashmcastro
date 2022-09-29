import { prismaClient } from '../../database/client.js';

export class CreateLocalColetaController {

    async handle ( request, response ){

    const { nome, rua, numero, complemento, cidade_id } = request.body;

    const localColeta = await prismaClient.localColeta({
        data: {
            nome,
            rua,
            numero,
            complemento,
            cidade: {
                connect: {
                    id: cidade_id
                }
            }
        }
    });

    console.log(localColeta);
    return response.json(localColeta)
    }
}