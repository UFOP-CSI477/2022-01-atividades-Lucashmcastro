import { prismaClient } from '../../database/client.js';

export class createPessoaController {

    async handle (request, response){

    const { nome, rua, numero, complemento, documento, cidade_id, tipo_id } = request.body;

    const pessoa = await prismaClient.pessoa({

        data: {
            nome,
            rua,
            numero,
            complemento,
            documento,
            cidade: {
                connect: {
                    id: cidade_id
                }
            }, 
            tipo: {
                connect: {
                    id: tipo_id
                }
            }
        }
    });

    console.log(pessoa);
    return response.json(pessoa);
    }
}