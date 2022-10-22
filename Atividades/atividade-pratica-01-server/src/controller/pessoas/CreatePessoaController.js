import { prismaClient } from '../../database/client.js';

export class CreatePessoaController {

    async handle (request, response){
    const { id, nome, rua, numero, complemento, documento, cidade_id, tipoSanguineo_id } = request.body;

    const pessoa = await prismaClient.pessoa.create({

        data: {
            id, 
            nome,
            rua,
            numero,
            complemento,
            documento,
            cidade: {
                connect: {
                    id: parseInt(cidade_id)
                }
            }, 
            tipoSanguineo: {
                connect: {
                    id: parseInt(tipoSanguineo_id)
                }
            }
        }
    });

    console.log(pessoa);
    return response.json(pessoa);
    }
}