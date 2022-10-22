import { prismaClient } from '../../database/client.js';

export class UpdatePessoaController {
    async handle(request, response) {
          
        const { id, nome, rua, numero, complemento, documento, cidade_id, tipo_id } = request.body;


        const pessoa = await prismaClient.pessoa.update({

            where: {
                id: parseInt(id)
            },
            data: {
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
                        id: parseInt(tipo_id)
                    }
                }
            }
        });

        return response.json(pessoa);
    }
}