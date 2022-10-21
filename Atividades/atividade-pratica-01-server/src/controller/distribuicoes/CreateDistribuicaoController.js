import { prismaClient } from '../../database/client.js';

export class CreateDistribuicaoController {

    async handle (request, response){

        const { id, data, produto_id, unidade_id } = request.body;

        const distribuicao = await prismaClient.distribuicoes.create({
            data: {
                id,
                data,
                produto: {
                    connect: {
                        id: produto_id
                    }
                }, 
                unidade: {
                    connect: {
                        id: unidade_id
                    }
                }
            }
        });

        console.log(distribuicao);
        return response.json(distribuicao);
    }
}