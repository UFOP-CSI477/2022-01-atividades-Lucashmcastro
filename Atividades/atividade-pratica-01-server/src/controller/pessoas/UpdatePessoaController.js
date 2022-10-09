import { prismaClient } from '../../database/client.js';

export class UpdatePessoaController {
    async handle(request, response) {
          
        const { id, nome, rua, numero, complemento, documento, cidade_id, tipo_id } = request.body;


        const pessoa = await prismaClient.pessoa.update({

            where: {
                id: id
            },
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
                tipoSanguineo: {
                    connect: {
                        id: tipo_id
                    }
                }
            }
        });

        return response.json(pessoa);
    }
}